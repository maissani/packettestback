import { logger, uuid } from "../helpers";
import { Party } from "../models/party";

const create = async (req: any, res: any) => {
  const createdParty = await Party.create({id: uuid(), moves: [], isStartedWithX: true});
  return res.json(createdParty);
};

/**
 * Get Party
 * Get the party with the identifier
 * @author Mehdi AISSANI <contact@mehdiaissani.com>
 *
 * @param {id} String The identifier of the party
 *
 * @returns {} Object corresponding to the current party
 */
const getParty =  async (req: any, res: any) => {
  const { identifier } =  req.params;
  const currentParty = await Party.findOne({id: identifier});
  logger.info(currentParty);
  return res.json(currentParty);
};

const setCurrentMove = async (req: any, res: any) => {
  const {identifier} = req.params;
  const {vector} = req.body;
  logger.info(`identifier: ${identifier} with new vector: ${vector}`);
  const currentParty = await Party.findOne({id: identifier});
  const movedVector =  vector.split(",").map((value: string) => parseInt(value, 10));
  currentParty.moves.push(movedVector);
  const savedParty = await currentParty.save();
  return res.json(savedParty);
};

export default {
  create,
  getParty,
  setCurrentMove,
};
