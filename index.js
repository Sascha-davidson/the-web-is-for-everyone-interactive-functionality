// Importeer express uit de node_modules map
import express, { json, response } from 'express'

// hier breek ik de api url in stukjes zodat ik alleen het hoog nodige hoef te gebruiken
const baseurl = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'
const principes = '/principes'
const urls = '/urls'
const websites = '/websites'

const url_data = await fetch(baseurl + urls + '?first=300'). then((response) => response.json())
const website_data = await fetch(baseurl + websites). then((response) => response.json())
const data = await fetch(baseurl + principes). then((response) => response.json())


// Maak een nieuwe express server aan
const server = express()

// Stel ejs in als template engine en geef de 'views' map door
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische resources
server.use(express.static('public'))

// Maak een route voor de index)
server.get('/', function (request, response) {
  response.render('index', {active: '/'})
})

// Maak een route voor de toolboard
server.get('/toolboard', function (request, response) {
  response.render('toolboard', {url_data, data, website_data, active: '/toolboard'})
})

// Maak een route voor de checklist
server.get('/checklist', function (request, response) {
  response.render('checklist', {api: data, active: '/checklist'})
})

// Maak een route voor de contact
server.get('/contact', function (request, response) {
  response.render('contact', {website_data, active: '/contact'})
})

// haalt post data op
server.post('/contact', function(request, response) {
  console.log(request.body)
  // TODO voor Sascha :)
  // POST naar https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/urls, de request.body

  // reaction for succed or failur
  const test = baseurl + urls
  postJson(test, request.body).then((data) => {
    let newURL = { ... request.body }
    if (data.data) {
      response.redirect(`/checklist?id=${data.data.id}`) 
      // TODO: squad meegeven, message meegeven
      // TODO: Toast meegeven aan de homepagina
    } else {
      const errormessage = `${request.body.url}: URl bestaat al.`
      const newdata = { error: errormessage, values: newURL }
      
      response.render('contact', {newdata, website_data, active: '/contact' })
    }
  })
})

// Stel het poortnummer in waar express op gaat luisteren
server.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
server.listen(server.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`serverlication started on http://localhost:${server.get('port')}`)
})

/**
 * postJson() is a wrserverer for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'serverlication/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}