import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WatchingMoviesService } from './watching-movies.service';
import { CreateWatchingMovieDto } from './create-watching-movie.dto/create-watching-movie.dto';
import { WatchingMovie } from './watching-movie.entity/watching-movie.entity';
@Controller('watching-movies')
export class WatchingMoviesController {
  constructor(private readonly watchingMoviesService: WatchingMoviesService) {}

  @Post()
  async createWatchingMovie(@Body() createWatchingMovieDto: CreateWatchingMovieDto): Promise<WatchingMovie> {
    return this.watchingMoviesService.createWatchingMovie(createWatchingMovieDto);
  }

  @Get()
  async getWatchingMovies(): Promise<WatchingMovie[]> {
    return this.watchingMoviesService.getWatchingMovies();
  }

  @Delete(':movieId')
  async deleteWatchingMovie(@Param('movieId') movieId: string): Promise<void> {
    return this.watchingMoviesService.deleteWatchingMovie(+movieId);
  }

}