import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';

@Entity()
export class Valentine extends BaseEntity {}
