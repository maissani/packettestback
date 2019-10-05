
## PacketAI Tech Test Backend

<img src="https://www.imt.fr/wp-content/uploads/2019/04/wtu-logo-packetai.png" alt="Technical test for PacketAI." align="center" />

<br/>
<div align="center" > Test Technique PacketAI</div>
<br/>

<div align="center">
  <!-- CodeClimate -->
  <a href="https://codeclimate.com/github/maissani/packettestback/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
  </a>
  <!-- TestCoverage -->
  <a href="https://codeclimate.com/github/maissani/packettestback/test_coverage"><img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/test_coverage" /></a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/maissani/packettestback">
    <img src="https://travis-ci.org/maissani/packettestback.svg?branch=master" alt="Build Status" />
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/maissani/packettestback">
    <img src="https://david-dm.org/maissani/packettestback.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/maissani/packettestback#info=devDependencies"> 
    <img src="https://david-dm.org/maissani/packettestback/dev-status.svg" alt="devDependency Status" />
  </a>
</div>


<br/>
<div align="center">
  <sub>Created by <a href="https://mehdiaissani.com">Mehdi AISSANI</a></sub>
</div>

<br/>

## About

Test JavaScript dont le but est de reproduire le jeu TIC TAC TOE alias MORPION ( en francais ).
Ce test incluera un diagrame D3JS des probabilités. 
Et si le temps me le permet une IA / Solution Mathématique pour jouer contre l'ORDINATEUR.
<br/>

## Features

This technical test includes the latest powerfull tools.

* **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
* **Express.js**- Handle Requests
* **Tslint** - The pluggable linting utility.
* **Jest** - Javascript testing framework
* **CucumberJS** - Behavior Driven Devellopment framework using Gerkin Syntax unit & functional tests
<br/>

## Installation
``` Bash
$ git clone https://github.com/maissani/packettestback.git backend
$ cd backend
$ npm install
``` 
<br/>

## Usage

<br/>

### Devellopment

Create a .ENV File
``` Bash
MONGO_URL="mongodb://localhost:27017/packetaidev"
``` 

Run the server
``` Bash
$ yarn dev
``` 
Then run the test suite
``` Bash
$ yarn watch
or
$ yarn test
``` 
<br/>

### Production

Create a .ENV File
``` Bash
MONGO_URL="mongodb://localhost:27017/packetaiprod"
``` 

Compile the sources
``` Bash
$ yarn build
``` 
Then the server
``` Bash
$ yarn prod
``` 