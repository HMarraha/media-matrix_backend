import { Module } from '@nestjs/common';
import { WatchingMoviesController } from './watching-movies.controller';
import { WatchingMoviesService } from './watching-movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchingMovie } from './watching-movie.entity/watching-movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WatchingMovie]),
  ],
  controllers: [WatchingMoviesController],
  providers: [WatchingMoviesService]
})
export class WatchingMoviesModule {}
