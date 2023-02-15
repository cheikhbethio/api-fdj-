import Player from '../database/schema/players.schema';

export const getAllPlayers = async () => Player.find({}).exec();

export const getOnePlayer = async (id: string) => {
	return Player.findById(id).exec();
};
