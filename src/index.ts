import * as cors from "cors";
import * as express from "express";
import { connect } from "mongoose";
import PartyController from "./controllers/PartyController";
import { clientApiKeyValidation, logger } from "./helpers";
require("dotenv").config();

// To check that Mongo URL is set
logger.info(process.env.MONGO_URL);

// Create a connection to the database
connect(
  process.env.MONGO_URL, {
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

// Only allow from authorized apps
const allowedOrigins = [
  "https://packetaitest.mehdiaissani.com",
  "http://localhost:8080",
  "http://localhost:3000",
  "http://localhost",
];

// Handle Form encoded or JSON Post Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors Check
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not
                allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
}));
app.use(clientApiKeyValidation);

// Routes Definitions
app.get("/party/create", PartyController.create);
app.get("/party/:identifier", PartyController.getParty);
app.post("/party/:identifier/move", PartyController.setCurrentMove);

// Express listening on port 3000
app.listen(process.env.EXPRESS_PORT, () => {
  logger.log({
    level: "info",
    message: `The API is listening on port ${process.env.EXPRESS_PORT}`,
  });
});
