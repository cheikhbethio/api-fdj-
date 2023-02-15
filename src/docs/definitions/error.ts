export const Error = {
	type: 'object',
	description: 'Error from api',
	properties:{
		message:{
			type:'string'
		},
		internal_code:{
			type:'string'
		}
	}
};