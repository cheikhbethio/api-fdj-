import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const playerSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	position: String,
	thumbnail: String,
	signin: {
		amount: Number,
		currency: String
	},
	born: Date,
});

const Player = model('Player', playerSchema);
export default Player;
