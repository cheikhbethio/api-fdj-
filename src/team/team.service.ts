import Team from '../database/schema/teams.schema';

export const getAllTeams = async () => Team.find({}).exec();

export const getOneTeam = async (id: string) => {
	return Team.findById(id).exec();
};

export const getTeamPlayers = async (id: string) => {
	return Team.findById(id)
		.populate('players');
};
