HeatMap
===

### GA WDI NYC Jan 14, Final Project

### Overview

**Heatmap** is a web application that displays New York City residential real estate listing data as a heat map weighted by price for both sales and rentals. Heatmap was developed as a single-page application (SPA) project for the January 2014 Web Development Immersive course at General Assembly using the agile software development process.

### Technologies Used:
* Ruby 2.1.0
* Ruby on Rails 4.0.2
* PostgreSQL Database
* Authentication & Authorization (using bcypt-ruby)
* Ruby Gems:
  * Bcrypt (Used to password protect ruby web app via authentication and authorization)(https://github.com/codahale/bcrypt-ruby)
  * Simplecov (Used to monitor test coverage)(https://github.com/colszowka/simplecov)
  * JSON (Used to use JSON objects in ruby)(https://github.com/douglascrockford/JSON-js)
* Javascript libraries:
  * Bootstrap (Front-end framework used to add modal overlays)(https://github.com/twbs/bootstrap)
* APIs:
  * Google maps api v3 (Used to display heatmap, places searchbox and data overlays)(https://developers.google.com/maps/documentation/javascript/layers#JSHeatMaps)
* TDD:
  * RSpec-Rails (Used to test methods)(https://github.com/rspec/rspec-rails)
  * Capybara (Used for acceptance testing)(https://github.com/jnicklas/capybara)
  * Factory Girl (Used to generate dummy models for testing)(https://github.com/thoughtbot/factory_girl)
  * FFaker (Used to randomly generate words for models used in tests)(https://github.com/EmmanuelOga/ffaker)

### User Stories Completed:
* A user can go to the homepage
* A user can search for a listing or neighborhood
* A user can change the radius of the heat map
* A user can change the opacity of the heat map
* A user can toggle the heat map
* A user can click on a listings
* A user can see data weighted by price

ERD (https://www.dropbox.com/s/mrh8fsc1z678990/heatmap_erd.jpg)

A link to Heatmap can be found here: ()

A full list of user stories can be found by looking at [this Pivotal Tracker Project](https://www.pivotaltracker.com/s/projects/1052398)

---
