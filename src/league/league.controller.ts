import { NextFunction, Request, Response } from 'express';
import { ResponseType } from '../shared/model';
import { LeagueDto } from './league.dto';
import { getAllLeagues, getLeagueTeams, getOneLeague } from './league.service';

export const getAllLeagueController = async(req: Request, res: Response, next: NextFunction): Promise<ResponseType<LeagueDto[]> | undefined> => {
	try {
		const name = req.query.name as string;
		const leagues = await getAllLeagues(name);
		return res.send(leagues);
		
	} catch (error) {
		next(error);
	}
};

export const getOneLeagueController = async (req: Request, res: Response, next: NextFunction): Promise<ResponseType<LeagueDto> | undefined> => {
	try {
		const league = await getOneLeague(req.params.id);
		return res.send(league);		
	} catch (error) {
		next(error);
	}
};

export const getLeagueTeamsController = async (req: Request, res: Response, next: NextFunction): Promise<ResponseType<LeagueDto> | undefined> => {
	try {
		const league = await getLeagueTeams(req.params.id);
		return res.send(league);		
	} catch (error) {
		next(error);
	}
};
