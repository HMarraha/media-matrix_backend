import { Module } from '@nestjs/common';
import { WatchedTvShowsController } from './watched-tvshows.controller';
import { WatchedTvShowsService } from './watched-tvshows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchedTvShow } from './watched-tvshow.entity/watched-tvshow.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WatchedTvShow]),
  ],
  controllers: [WatchedTvShowsController],
  providers: [WatchedTvShowsService]
})
export class WatchedTvshowsModule {}
