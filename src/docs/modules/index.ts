import {  leaguesEndpoint } from './league';
import { PlayersEndpoint } from './player';
import { teamsEndpoint } from './team';

export const modules= {
	paths:{
		... leaguesEndpoint,
		... teamsEndpoint,
		... PlayersEndpoint
	}
};
