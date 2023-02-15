import { NextFunction, Request, Response } from 'express';
import { ResponseType } from '../shared/model';
import { getAllTeams, getOneTeam, getTeamPlayers } from './team.service';
import { TeamDto } from './team.dto';

export const getAllTeamController = async(req: Request, res: Response, next: NextFunction): Promise<ResponseType<TeamDto[]> | undefined> => {
	try {
		const teams = await getAllTeams();
		return res.send(teams);
	} catch (error) {
		next(error);
	}
};

export const getOneTeamController = async (req: Request, res: Response, next: NextFunction): Promise<ResponseType<TeamDto> | undefined> => {
	try {
		const team = await getOneTeam(req.params.id);
		return res.send(team);		
	} catch (error) {
		next(error);
	}
};

export const getTeamPlayersController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const team = await getTeamPlayers(req.params.id);
		return res.send(team);		
	} catch (error) {
		next(error);
	}
};


