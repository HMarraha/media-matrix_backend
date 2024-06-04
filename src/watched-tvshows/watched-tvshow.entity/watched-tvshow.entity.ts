import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('watched_tvshows')
export class WatchedTvShow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  tvshowId: number;

  @Column()
  title: string;

  @Column({ length: 1000 })
  overview: string;

  @Column()
  posterPath: string;

}
