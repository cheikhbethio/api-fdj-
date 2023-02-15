import { Response } from 'express';

export type ResponseType<T> =  Response<T, Record<string, T>>