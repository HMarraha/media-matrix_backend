import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('want_to_watch_tvshows')
export class WantToWatchTvShow {
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
