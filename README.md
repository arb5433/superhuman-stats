# How to run this project

## Install Dependencies
  * Make sure that you run a 'npm install' from the route of this project to install any dependencies in the package.json

## Starting the app
  * Once everything is installed simply run 'npm start' from the route and it will start up the app and open a web browser to the correct port

### Important Side Note
  * If running on a M1 macOS make sure that you have node@15 installed as some of the scripts will crash ('npm start' being one of them) if you are using node@12 with the arm64 architecture.

# Project Overview
## Splash Page
* The banner that persists above all of the pages is a quick link from any page back to the splash page.
* To make it easier to find the specific information a user is looking for, I first incorperated in a splash page with clickable banners that help narrow down the field to browse. 
<img width="909" alt="Screen Shot 2021-07-29 at 3 29 31 PM" src="https://user-images.githubusercontent.com/74081636/127555099-9706751f-67d8-4bca-809d-bf663a71533a.png">

## Heros / Villains Page

* Once a user clicks on one of the banners, it brings them to a display page that shows the heros from that universe.
* At any point the user can toggle between viewing the heros or villains from that specific universe. 
* I utilized some simple CSS to change the 'feel' of the page when they toggle between the two opposites.
<img width="1296" alt="Screen Shot 2021-07-29 at 3 32 52 PM" src="https://user-images.githubusercontent.com/74081636/127555665-80442bef-9d0a-449f-aec3-bf556d7eee9c.png">

## Individual Display Pages
* Clicking on any of the interactive cards from the heros or villains page will take you to the individualized page for that character.
* This page displays all of the stats for the user to see as well as some additional information they might find interesting.
* From this page you can flip through all of the character pages by utilizing next and previous buttons, which search through the api and ensure that they do not brind up a page that is not included in the api.
<img width="1326" alt="Screen Shot 2021-07-29 at 3 31 30 PM" src="https://user-images.githubusercontent.com/74081636/127556297-8df23206-4f8d-4a2c-8635-7adaa61f51d9.png">
<img width="877" alt="Screen Shot 2021-07-29 at 3 30 21 PM" src="https://user-images.githubusercontent.com/74081636/127556333-8daccf94-dc68-4d0e-9fd1-732d3aae7b0c.png">







 
