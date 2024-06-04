import { User } from 'src/users/User';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('watching_tvshows')
export class WatchingTvShow {
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
