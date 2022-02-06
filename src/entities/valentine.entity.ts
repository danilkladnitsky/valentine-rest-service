import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { User } from './user.entity';

@Entity()
export class Valentine extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
