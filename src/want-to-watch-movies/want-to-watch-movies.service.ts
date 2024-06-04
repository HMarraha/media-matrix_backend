import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WantToWatchMovie } from './want-to-watch-movie.entity/want-to-watch-movie.entity';
import { CreateWantToWatchMovieDto } from './create-want-to-watch-movie.dto/create-want-to-watch-movie.dto';
@Injectable()
export class WantToWatchMoviesService {
  constructor(
    @InjectRepository(WantToWatchMovie)
    private readonly wantToWatchMovieRepository: Repository<WantToWatchMovie>,
  ) {}

  async createWantToWatchMovie(createWantToWatchMovieDto: CreateWantToWatchMovieDto): Promise<WantToWatchMovie> {
    return this.wantToWatchMovieRepository.save(createWantToWatchMovieDto);
  }

  async deleteWantToWatchMovie(movieId: number): Promise<void> {
    await this.wantToWatchMovieRepository.delete({ movieId });
  }

  async getWantToWatchMovies(): Promise<WantToWatchMovie[]> {
    return this.wantToWatchMovieRepository.find();
  }

}