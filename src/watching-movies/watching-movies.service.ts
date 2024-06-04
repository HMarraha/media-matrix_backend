import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WatchingMovie } from './watching-movie.entity/watching-movie.entity';
import { CreateWatchingMovieDto } from './create-watching-movie.dto/create-watching-movie.dto';
@Injectable()
export class WatchingMoviesService {
  constructor(
    @InjectRepository(WatchingMovie)
    private readonly watchingMovieRepository: Repository<WatchingMovie>,
  ) {}

  async createWatchingMovie(createWatchingMovieDto: CreateWatchingMovieDto): Promise<WatchingMovie> {
    return this.watchingMovieRepository.save(createWatchingMovieDto);
  }

  async deleteWatchingMovie(movieId: number): Promise<void> {
    await this.watchingMovieRepository.delete({ movieId });
  }

  async getWatchingMovies(): Promise<WatchingMovie[]> {
    return this.watchingMovieRepository.find();
  }

  // Other methods as needed
}