> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Website voor Vervoerregio Amsterdam
![vervoerregio-amsterdam-logo-voor-github](https://user-images.githubusercontent.com/112861160/225649035-bbb5cfff-5137-4599-8cac-493107dea9ab.svg)
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Vervoerregio Amsterdam wilt een website die de verplichtingen voor toegankelijkheid van website's wilt uitgelegd krijgen. Deze website moet ook een afvink lijst krijgen zodat hun kunnen controleren of een website van een van hun partners wel of niet toegankelijk is.

De pagina is te bezoeken via deze link: https://curious-baseball-cap-boa.cyclic.app/

User Story:

* #1 Als gebruiker wil ik een overzicht van toegankelijkheidsrichtlijnen kunnen bekijken, om te begrijpen wat er moet gebeuren om een website/app toegankelijker te maken

* #2 Als gebruiker wil ik detail informatie over een toegankelijkheidsrichtlijn bekijken, om te beoordelen of mijn website/app voldoet aan de richtlijn

![localhost_8000_](https://user-images.githubusercontent.com/112861160/225650849-fa2b53bb-0e55-43d1-b11e-927f8aa2572b.png)

## Kenmerken
Deze website is gemaakt met node, express en ejs. Er word ook data uit een api opgevraagd samen met een active active state voor somige pagina's. 

Ik heb 2 functies gemaakt voor dit project

### Toegankelijk Webformulieren
Een webformulier is een formulier die de gebruiker kan invullen. mijn formulier gaat de api aanvullen met opgeslage vortgang van de checklist. Ik heb meer gefocust op het formulier werkende maken dan dat het toegankelijk is. 

### Progressive Enhancement
Progresive enhancement is ervoor zorgen dat alle funcites op een website berijkbaar zijn (basis html moet goed opgebouwd zijn). Als je javascript of scc niet werkt dan je dan alsnog de website kan gebruikt. Ik heb dit gedaan in mijn dialog, omdat mijn dialog javascript nodig heb on te werken so zonder javascript heb ik een alternatieve oplosing.

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

## Installatie
Download of clone dit project. Open de terminal en schrijf `npm install` om het note te instaleren. Darna schrijf je `npm start` om de website local te starten.

## Gebruik
De gebruikers (medewerkers van Vervoerregio Amsterdam) kunnen deze website gebruiken om website's van hun partners te controleren op toegankelijkheid.


## Bronnen
Dit zijn de 2 bronnen voor popover die ik gelezen heb:
* https://open-ui.org/components/popover.research.explainer/
* https://utilitybend.com/blog/open-ui-and-the-popover-api

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
