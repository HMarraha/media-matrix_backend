import { Module } from '@nestjs/common';
import { WatchedMoviesController } from './watched-movies.controller';
import { WatchedMoviesService } from './watched-movies.service';
import { WatchedMovie } from './watched-movie.entity/watched-movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WatchedMovie]),
  ],
  controllers: [WatchedMoviesController],
  providers: [WatchedMoviesService]
})
export class WatchedMoviesModule {}
