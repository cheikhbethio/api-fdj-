import express, { Router } from 'express';
import { getAllPlayerController, getOnePlayerController } from './player.controller';

export const playerRouter: Router = express.Router();

playerRouter.route('/').get(getAllPlayerController);

playerRouter.route('/:id').get(getOnePlayerController);

