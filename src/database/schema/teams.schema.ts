import mongoose from 'mongoose';
import Player from './players.schema';
const { Schema, model } = mongoose;

const teamSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	thumbnail: String,
	players: [{type: Schema.Types.ObjectId, ref: Player}]
});

const Team = model('Team', teamSchema);
export default Team;
