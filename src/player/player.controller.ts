import { NextFunction, Request, Response } from 'express';
import { ResponseType } from '../shared/model';
import { PlayerDto } from './player.dto';
import { getAllPlayers, getOnePlayer } from './player.service';

export const getAllPlayerController = async (req: Request, res: Response, next: NextFunction): Promise<ResponseType<PlayerDto[]> | undefined> => {

	try {
		const player = await getAllPlayers();
		return res.send(player);
	} catch (error) {
		next(error);
	}
};

export const getOnePlayerController = async (req: Request, res: Response, next: NextFunction): Promise<ResponseType<PlayerDto> | undefined> => {
	try {
		const player = await getOnePlayer(req.params.id);
		console.log('file: player.controller.ts:15 ~ getOnePlayerController ~ req.params.id', req.params.id);
		return res.send(player);
		
	} catch (error) {
		next(error);
	}
};


