# PacketAI Tech Test Backend

Test JavaScript dont le but est de reproduire le jeu TIC TAC TOE alias MORPION ( en francais ).
Ce test incluera un diagrame D3JS des probabilités. 
Et si le temps me le permet une IA / Solution Mathématique pour jouer contre l'ORDINATEUR. 

## Le sujet du test
```
TBD
```

## Installation
``` Bash
$ git clone https://github.com/maissani/packettestback.git backend
$ cd backend
$ npm install
``` 

## Usage

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