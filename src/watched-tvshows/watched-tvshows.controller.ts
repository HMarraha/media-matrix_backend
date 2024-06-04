import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WatchedTvShowsService } from './watched-tvshows.service';
import { CreateWatchedTvShowDto } from './create-watched-tvshow.dto/create-watched-tvshow.dto';
import { WatchedTvShow } from './watched-tvshow.entity/watched-tvshow.entity';
@Controller('watched-tvshows')
export class WatchedTvShowsController {
  constructor(private readonly watchedTvShowsService: WatchedTvShowsService) {}

  @Post()
  async createWatchedTvShow(@Body() createWatchedTvShowDto: CreateWatchedTvShowDto): Promise<WatchedTvShow> {
    return this.watchedTvShowsService.createWatchedTvShow(createWatchedTvShowDto);
  }

  @Get()
  async getWatchedTvShows(): Promise<WatchedTvShow[]> {
    return this.watchedTvShowsService.getWatchedTvShows();
  }

  @Delete(':tvshowId')
  async deleteWatchedTvShow(@Param('tvshowId') tvshowId: string): Promise<void> {
    return this.watchedTvShowsService.deleteWatchedTvShow(+tvshowId);
  }

}