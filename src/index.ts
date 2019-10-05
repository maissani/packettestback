import * as cors from "cors";
import * as express from "express";
import { connect } from "mongoose";
import PartyController from "./controllers/PartyController";
import { logger } from "./helpers";
require("dotenv").config();

logger.info(process.env.MONGO_URL);

connect(
  process.env.MONGO_URL, {
    autoReconnect: true,
    useNewUrlParser: true,
});

const app = express();
const allowedOrigins = [
  "https://packetaitest.mehdiaissani.com",
  "http://localhost:8080",
  "http://localhost:3000",
  "http://localhost",
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/party/create", PartyController.create);
app.get("/party/:identifier", PartyController.getParty);
app.post("/party/:identifier/move", PartyController.setCurrentMove);

app.listen(3000, () => {
  logger.log({
    level: "info",
    message: "The app is listening on port 3000!",
  });
});
