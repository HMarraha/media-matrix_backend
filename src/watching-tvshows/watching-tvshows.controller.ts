import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WatchingTvShowsService } from './watching-tvshows.service';
import { WatchingTvShow } from './watching-tvshow.entity/watching-tvshow.entity';
import { CreateWatchingTvShowDto } from './create-watching-tvshow.dto/create-watching-tvshow.dto';
import { response } from 'express';
@Controller('watching-tvshows')
export class WatchingTvShowsController {
  constructor(private readonly watchingTvShowsService: WatchingTvShowsService) {}

  @Post()
  async createWatchingTvShow(@Body() createWatchingTvShowDto: CreateWatchingTvShowDto): Promise<WatchingTvShow> {
    return this.watchingTvShowsService.createWatchingTvShow(createWatchingTvShowDto);
  }

  @Get()
  async getWatchingTvShows(): Promise<WatchingTvShow[]> {
    return this.watchingTvShowsService.getWatchingTvShows();
  }

  @Delete(':tvshowId')
  async deleteWatchingTvShow(@Param('tvshowId') tvshowId: string): Promise<void> { 
    return this.watchingTvShowsService.deleteWatchingTvShow(+tvshowId);
  }

}