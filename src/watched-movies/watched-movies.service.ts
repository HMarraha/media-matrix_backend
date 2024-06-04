import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WatchedMovie } from './watched-movie.entity/watched-movie.entity';
import { CreateWatchedMovieDto } from './create-watched-movie.dto/create-watched-movie.dto';

@Injectable()
export class WatchedMoviesService {
  constructor(
    @InjectRepository(WatchedMovie)
    private readonly watchedMovieRepository: Repository<WatchedMovie>,
  ) {}

  async createWatchedMovie(createWatchedMovieDto: CreateWatchedMovieDto): Promise<WatchedMovie> {
    return this.watchedMovieRepository.save(createWatchedMovieDto);
  }

  async deleteWatchedMovie(movieId: number): Promise<void> {
    await this.watchedMovieRepository.delete({ movieId });
  }

  async getWatchedMovies(): Promise<WatchedMovie[]> {
    return this.watchedMovieRepository.find();
  }

  // Other methods as needed
}