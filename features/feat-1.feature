Feature: Definition de la logique de stockage
  As A User
  I want to store the parties that i have played
  In order to check the steps and score to review the party

 Scenario Outline: A party is stored by the frontend
  Given the app is ready & is ready for an api Call
  When i recieve "<vector>"
  Then the chunk is stored to the party and output result: "<result>"

  Examples:
    | vector | result |
    | 0,0,0,1,0,0,0,0,0 | [[0,0,0,1,0,0,0,0,0]] |
    | 0,0,0,0,0,0,0,1,0 | [[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0 ]] |
    | 0,0,0,0,0,0,1,0,0 | [[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0 ],[0,0,0,0,0,0,1,0,0]] |