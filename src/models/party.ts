import { Document, model, Model, Schema } from "mongoose";

export interface IParty extends Document {
  id: string;
  isStartedWithX: boolean;
  moves: any;
}

const PartySchema: Schema = new Schema({
  id: String,
  isStartedWithX: Boolean,
  moves: { type: [[Number]] , default: []},

});

export const Party: Model<IParty> = model<IParty>("Party", PartySchema);
