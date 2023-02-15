import League from '../database/schema/league.schema';

export const getAllLeagues = async (name?: string) => {
	let query = {};
	if (name) {
		query = { name };
	}
	return League.find(query).populate('teams');

};

export const getOneLeague = async (id: string) => {
	return League.findById(id).exec();
};

export const getLeagueTeams = async (id: string) => {
	return League.findById(id)
		.populate('teams');
};

