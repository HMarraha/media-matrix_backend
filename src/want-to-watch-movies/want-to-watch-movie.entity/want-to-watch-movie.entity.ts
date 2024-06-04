import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('want_to_watch_movies')
export class WantToWatchMovie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  movieId: number;

  @Column()
  title: string;

  @Column({ length: 1000 })
  overview: string;

  @Column()
  posterPath: string;

}