import { Entity, Column, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Valentine } from './valentine.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  isu: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  avatar_url: string;

  @OneToMany(() => Valentine, (valentine) => valentine.user)
  valentines: Valentine[];
}
