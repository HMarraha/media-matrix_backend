import { Module } from '@nestjs/common';
import { WantToWatchMoviesController } from './want-to-watch-movies.controller';
import { WantToWatchMoviesService } from './want-to-watch-movies.service';
import { WantToWatchMovie } from './want-to-watch-movie.entity/want-to-watch-movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WantToWatchMovie]),
  ],
  controllers: [WantToWatchMoviesController],
  providers: [WantToWatchMoviesService]
})
export class WantToWatchMoviesModule {}
