import { Module } from '@nestjs/common';
import { WatchingTvShowsController } from './watching-tvshows.controller';
import { WatchingTvShowsService } from './watching-tvshows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchingTvShow } from './watching-tvshow.entity/watching-tvshow.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WatchingTvShow]),
  ],
  controllers: [WatchingTvShowsController],
  providers: [WatchingTvShowsService]
})
export class WatchingTvshowsModule {}
