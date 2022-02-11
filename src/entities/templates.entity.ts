import { Entity, Column } from 'typeorm';
import BaseEntity from './base.entity';

@Entity()
export class Template extends BaseEntity {
  @Column()
  url: string;

  @Column()
  downloads: number;
}
