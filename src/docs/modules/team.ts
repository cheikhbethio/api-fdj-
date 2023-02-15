import { Error } from '../definitions/error';
import { Teams } from '../definitions/team';

export const teamsEndpoint = {
	'/api/teams': {
		get: {
			tags: ['Teams'],
			description: 'get all teams',
			operationId: 'getAllteams',
			parameters: [],
			responses: {
				'200': {
					description: 'Returned teams',
					...Teams.Team
				},
				'404': Error,
				'500': Error
			}
		}
	},
	'/api/teams/{id}': {
		get: {
			tags: ['Teams'],
			description: 'get one Team',
			operationId: 'getOneteams',
			parameters: [
				{
					name:'id',
					in:'path',
					schema:{
						type:'string',
						description:'Team identification number',
					},
					required: true,
					description: 'A single Leaque id'
				}],
			responses: {
				'200': {
					description: 'Returned teams',
					...Teams.Team
				},
				'404': Error,
				'500': Error
			}
		}
	},
	'/api/teams/{id}/players': {
		get: {
			tags: ['Teams'],
			description: 'get all player for one Team',
			operationId: 'getTeamPlayer',
			parameters: [
				{
					name:'id',
					in:'path',
					schema:{
						type:'string',
						description:'Team identification number',
					},
					required: true,
					description: 'A single team id'
				}],
			responses: {
				'200': {
					description: 'Returned teams and player',
					...Teams.TeamWithPlayers
				},
				'404': Error,
				'500': Error
			}
		}
	}
};
