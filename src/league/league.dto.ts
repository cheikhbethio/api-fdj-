import { TeamDto } from '../team/team.dto';

export class LeagueDto {
	teams!: string[];
	constructor(
		private name: string,
		private sport: string,
	) {	}
}

export class LeagueTeamsDto {
	teams!: TeamDto[];
	constructor(
		private name: string,
		private sport: string,
	) {	}
}
