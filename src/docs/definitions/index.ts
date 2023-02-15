import { Error } from './error';
import { leagues } from './league';
export const definitions = {
	components:{
		schemas:{
			...leagues,
			Error
		}
	}
};
