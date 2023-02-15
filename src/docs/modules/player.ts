import { Error } from '../definitions/error';
import { Players } from '../definitions/player';

export const PlayersEndpoint = {
	'/api/players': {
		get: {
			tags: ['Players'],
			description: 'get all Players',
			operationId: 'getAllPlayers',
			parameters: [],
			responses: {
				'200': {
					description: 'Returned Players',
					...Players.Player
				},
				'404': Error,
				'500': Error
			}
		}
	},
	'/api/players/{id}': {
		get: {
			tags: ['Players'],
			description: 'get one Player',
			operationId: 'getOnePlayers',
			parameters: [
				{
					name:'id',
					in:'path',
					schema:{
						type:'string',
						description:'Player identification number',
					},
					required: true,
					description: 'A single Leaque id'
				}],
			responses: {
				'200': {
					description: 'Returned Players',
					...Players.Player
				},
				'404': Error,
				'500': Error
			}
		}
	},
};