import express, { Router } from 'express';
import { getAllLeagueController, getLeagueTeamsController, getOneLeagueController } from './league.controller';

export const leagueRouter: Router = express.Router();

leagueRouter.route('/').get(getAllLeagueController);

leagueRouter.route('/:id').get(getOneLeagueController);

leagueRouter.route('/:id/teams').get(getLeagueTeamsController);

