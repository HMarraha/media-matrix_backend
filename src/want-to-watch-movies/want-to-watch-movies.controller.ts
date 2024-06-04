import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WantToWatchMoviesService } from './want-to-watch-movies.service';
import { CreateWantToWatchMovieDto } from './create-want-to-watch-movie.dto/create-want-to-watch-movie.dto';
import { WantToWatchMovie } from './want-to-watch-movie.entity/want-to-watch-movie.entity';
@Controller('want-to-watch-movies')
export class WantToWatchMoviesController {
  constructor(private readonly wantToWatchMoviesService: WantToWatchMoviesService) {}

  @Post()
  async createWantToWatchMovie(@Body() createWantToWatchMovieDto: CreateWantToWatchMovieDto): Promise<WantToWatchMovie> {
    return this.wantToWatchMoviesService.createWantToWatchMovie(createWantToWatchMovieDto);
  }

  @Get()
  async getWantToWatchMovies(): Promise<WantToWatchMovie[]> {
    return this.wantToWatchMoviesService.getWantToWatchMovies();
  }

  @Delete(':movieId')
  async deleteWantToWatchMovie(@Param('movieId') movieId: string): Promise<void> {
    return this.wantToWatchMoviesService.deleteWantToWatchMovie(+movieId);
  }

  // Other methods as needed
}