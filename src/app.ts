import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { startdb } from './database/db-config';
import { playerRouter } from './player/player.route';
import { leagueRouter } from './league/league.route';
import { teamRouter } from './team/team.route';
import swaggerUI from 'swagger-ui-express';
import { docs } from './docs';

const app = express();
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
startdb();

app.use(morgan('combined'));

app.use('/api/players', playerRouter);

app.use('/api/leagues', leagueRouter);

app.use('/api/teams', teamRouter);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.use((err: unknown, req:Request, res: Response, next: NextFunction) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('error', { error: err });
});


const port = '33800';

app.listen(port, () => {
	console.log(`serveur starting at port ${port}` );
});

