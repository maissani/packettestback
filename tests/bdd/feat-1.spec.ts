
import { defineFeature, loadFeature} from "jest-cucumber";
import fetch from "node-fetch";
import { URLSearchParams } from "url";
import { logger } from "../../src/helpers";

const feature = loadFeature("./features/feat-1.feature");
process.env.EXPRESS_PORT = "4000";

defineFeature(feature, (test) => {
  let currentParty;
  let lastMove;

  beforeAll(async () => {
    currentParty = await fetch(`http://localhost:${process.env.EXPRESS_PORT}/party/create`, {
      headers: { api_key: process.env.API_KEY },
    }).then((res) => res.json());
  });

  test("A party is stored by the frontend", ({given, when, then, pending}) => {

    given("the app is ready & is ready for an api Call", () => {
      logger.info(`Launching the test id: ${currentParty.id}`);
    });

    when(/^i recieve "([^"]*)"$/, async (recieved) => {
      const params = new URLSearchParams();
      params.append("vector", recieved);
      lastMove = await fetch(`http://localhost:${process.env.EXPRESS_PORT}/party/${currentParty.id}/move`, {
        body: params,
        headers: { api_key: process.env.API_KEY },
        method: "POST",
      })
      .then((res) => res.json());
    });

    then(/^the chunk is stored to the party and output result: "([^"]*)"$/, async (stored) => {
      stored = JSON.parse(stored);
      const savedMoves = await fetch(`http://localhost:${process.env.EXPRESS_PORT}/party/${currentParty.id}`, {
        headers: { api_key: process.env.API_KEY },
      }).then((res) => res.json());
      expect(savedMoves.moves).toStrictEqual(stored);
    });
  });
});
