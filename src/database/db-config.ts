import mongoose from 'mongoose';

const hostname = 'localhost:27017';
const dbName = 'fdj';

const dbUrl = `mongodb://${hostname}/${dbName}`;

const db = mongoose.connection;
db.on('error', () => console.log( 'connection error: '));
db.once('open', function () {
	console.log('Connected successfully');
});


export const startdb = async() => {
	await mongoose.connect(dbUrl);
};