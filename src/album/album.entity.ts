
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  yearOfRelease: number

  @Column()
  labelName: string;

}
