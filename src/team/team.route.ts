import express, { Router } from 'express';
import { getAllTeamController, getOneTeamController, getTeamPlayersController } from './team.controller';

export const teamRouter: Router = express.Router();

teamRouter.route('/').get(getAllTeamController);

teamRouter.route('/:id').get(getOneTeamController);

teamRouter.route('/:id/players').get(getTeamPlayersController);



