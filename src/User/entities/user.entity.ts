import { Room } from '@prisma/client';
import { Card } from '../../card/entities/card.entity';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  wallet?: number;
  matches?: number;
  wins?: number;
  withdraws?: number;
  cards?: Card[];
  room?: Room;
  roomID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
