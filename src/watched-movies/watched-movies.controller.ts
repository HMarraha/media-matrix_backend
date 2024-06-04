import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WatchedMoviesService } from './watched-movies.service';
import { CreateWatchedMovieDto } from './create-watched-movie.dto/create-watched-movie.dto';
import { WatchedMovie } from './watched-movie.entity/watched-movie.entity';
@Controller('watched-movies')
export class WatchedMoviesController {
  constructor(private readonly watchedMoviesService: WatchedMoviesService) {}

  @Post()
  async createWatchedMovie(@Body() createWatchedMovieDto: CreateWatchedMovieDto): Promise<WatchedMovie> {
    return this.watchedMoviesService.createWatchedMovie(createWatchedMovieDto);
  }

  @Get()
  async getWatchedMovies(): Promise<WatchedMovie[]> {
    return this.watchedMoviesService.getWatchedMovies();
  }

  @Delete(':movieId')
  async deleteWatchedMovie(@Param('movieId') movieId: string): Promise<void> {
    return this.watchedMoviesService.deleteWatchedMovie(+movieId);
  }

  // Other methods as needed
}