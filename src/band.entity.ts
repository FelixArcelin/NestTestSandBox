
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Band {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  yearOfCreation: number

  @Column({ default: true })
  isActive: boolean;
}
