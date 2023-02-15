import { Error } from '../definitions/error';
import { leagues } from '../definitions/league';

export const leaguesEndpoint = {
	'/api/leagues': {
		get: {
			tags: ['Leagues'],
			description: 'get all Leagues',
			operationId: 'getAllLeagues',
			parameters: [
				{
					name:'name',
					in:'query',
					schema:{
						type:'string',
						description:'League name',
					},
					required: false,
					description: 'League name'
				}],
			responses: {
				'200': {
					description: 'Returned Leagues',
					...leagues.LeagueWithTeam
				},
				'404': Error,
				'500': Error
			}
		}
	},
	'/api/leagues/{id}': {
		get: {
			tags: ['Leagues'],
			description: 'get one League',
			operationId: 'getOneLeagues',
			parameters: [
				{
					name:'id',
					in:'path',
					schema:{
						type:'string',
						description:'League identification number',
					},
					required: true,
					description: 'A single Leaque id'
				}],
			responses: {
				'200': {
					description: 'Returned Leagues',
					...leagues.League
				},
				'404': Error,
				'500': Error
			}
		}
	},
	'/api/leagues/{id}/teams': {
		get: {
			tags: ['Leagues'],
			description: 'get all teams for a League',
			operationId: 'getTeamsLeagues',
			parameters: [
				{
					name:'id',
					in:'path',
					schema:{
						type:'string',
						description:'League identification number',
					},
					required: true,
					description: 'A single Leaque id'
				}],
			responses: {
				'200': {
					description: 'Returned Leagues',
					schema: leagues.LeagueWithTeam
				},
				'404': Error,
				'500': Error
			}
		}
	},
};