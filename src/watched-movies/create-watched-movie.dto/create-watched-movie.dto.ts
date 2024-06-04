import { IsNotEmpty } from 'class-validator';

export class CreateWatchedMovieDto {
  @IsNotEmpty({ message: 'Movie ID must not be empty' })
  movieId: number;

  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Overview must not be empty' })
  overview: string;

  @IsNotEmpty({ message: 'Poster path must not be empty' })
  posterPath: string;

}