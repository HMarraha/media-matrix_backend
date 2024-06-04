import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { WantToWatchTvShowsService } from './want-to-watch-tvshows.service';
import { CreateWantToWatchTvShowDto } from './create-want-to-watch-tvshow.dto/create-want-to-watch-tvshow.dto';
import { WantToWatchTvShow } from './want-to-watch-tvshow.entity/want-to-watch-tvshow.entity';
@Controller('want-to-watch-tvshows')
export class WantToWatchTvShowsController {
  constructor(private readonly wantToWatchTvShowsService: WantToWatchTvShowsService) {}

  @Post()
  async createWantToWatchTvShow(@Body() createWantToWatchTvShowDto: CreateWantToWatchTvShowDto): Promise<WantToWatchTvShow> {
    return this.wantToWatchTvShowsService.createWantToWatchTvShow(createWantToWatchTvShowDto);
  }

  @Get()
  async getWantToWatchTvShows(): Promise<WantToWatchTvShow[]> {
    return this.wantToWatchTvShowsService.getWantToWatchTvShows();
  }

  @Delete(':tvshowId')
  async deleteWantToWatchTvShow(@Param('tvshowId') tvshowId: string): Promise<void> {
    return this.wantToWatchTvShowsService.deleteWantToWatchTvShow(+tvshowId);
  }

}