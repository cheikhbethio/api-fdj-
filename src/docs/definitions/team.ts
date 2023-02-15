import { Players } from './player';

const Team = {
	type: 'object',
	properties: {
		name: {
			type: 'string'
		},
		thumbnail: {
			type: 'boolean'
		},
		players: {
			type: 'array',
			items: { type: 'string' }
		}
	}
};

const TeamWithPlayers = {
	type: 'object',
	properties: {
		name: {
			type: 'string'
		},
		thumbnail: {
			type: 'boolean'
		},
		players: {
			type: 'array',
			items: Players
		}
	}
};
 
export const Teams = {
	Team,
	TeamWithPlayers
};

