import { definitions, } from './definitions';
import { server } from './servers';
import { tags } from './tags';
import { modules } from './modules';
import { info } from './info';

export const docs = {
	...info,
	...server,
	...definitions,
	...tags,
	...modules
};