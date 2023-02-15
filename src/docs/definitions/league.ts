import { Teams } from './team';

const League = {
	type: 'object',
	properties: {
		name: {
			type: 'string'
		},
		sport: {
			type: 'string'
		},
		teams: {
			type: 'array',
			items: { type: 'string' }
		}
	}
};
 
const LeagueWithTeam = {
	type: 'object',
	properties: {
		name: {
			type: 'string'
		},
		sport: {
			type: 'string'
		},
		teams: Teams.Team
	}
};

export const leagues = {
	League,
	LeagueWithTeam
};

