import mongoose from 'mongoose';
import Team from './teams.schema';
const { Schema, model } = mongoose;


const leagueSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	sport: String,
	teams: [{type: Schema.Types.ObjectId, ref: Team}]
});

const League = model('League', leagueSchema);
export default League;

