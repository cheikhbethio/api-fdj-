const Player = {
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

export const Players = {
	Player,
};

