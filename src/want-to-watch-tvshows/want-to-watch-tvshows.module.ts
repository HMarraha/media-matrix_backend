import { Module } from '@nestjs/common';
import { WantToWatchTvShowsController } from './want-to-watch-tvshows.controller';
import { WantToWatchTvShowsService } from './want-to-watch-tvshows.service';
import { WantToWatchTvShow } from './want-to-watch-tvshow.entity/want-to-watch-tvshow.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WantToWatchTvShow]),
  ],
  controllers: [WantToWatchTvShowsController],
  providers: [WantToWatchTvShowsService]
})
export class WantToWatchTvshowsModule {}
