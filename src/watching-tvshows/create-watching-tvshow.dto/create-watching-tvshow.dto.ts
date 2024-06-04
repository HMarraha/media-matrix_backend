import { IsNotEmpty } from 'class-validator';

export class CreateWatchingTvShowDto {
  @IsNotEmpty({ message: 'TV Show ID must not be empty' })
  tvshowId: number;

  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Overview must not be empty' })
  overview: string;

  @IsNotEmpty({ message: 'Poster path must not be empty' })
  posterPath: string;

}
