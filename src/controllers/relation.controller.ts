/** Controller to return joined user and company data */
import { Request, Response } from 'express';
import { getJoinedData } from '../services/relation.service';

export const getRelations = (req: Request, res: Response) => {
  const data = getJoinedData();
  return res.status(200).json(data);
};