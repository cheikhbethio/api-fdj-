export class TeamDto {
	// position: string;
	// thumbnail: boolean;
	players!: string[];
	/**
   *
   */
	constructor(
		private name: string,
		private thumbnail: boolean,
	) {	}
}
