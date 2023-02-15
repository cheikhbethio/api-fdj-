export class PlayerDto {
	// position: string;
	// thumbnail: boolean;
	signin!: {
    amount: number,
    currency: string
  };
	/**
   *
   */
	constructor(
		private name: string,
		private position: string,
		private thumbnail: boolean,
		private born: string,
	) {	}
}
