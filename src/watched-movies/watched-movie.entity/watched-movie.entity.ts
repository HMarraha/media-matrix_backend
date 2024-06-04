import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('watched_movies')
export class WatchedMovie {
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
