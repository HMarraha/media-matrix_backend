import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WatchingTvShow } from './watching-tvshow.entity/watching-tvshow.entity';
import { CreateWatchingTvShowDto } from './create-watching-tvshow.dto/create-watching-tvshow.dto';
@Injectable()
export class WatchingTvShowsService {
  constructor(
    @InjectRepository(WatchingTvShow)
    private readonly watchingTvShowRepository: Repository<WatchingTvShow>,
  ) {}

  async createWatchingTvShow(createWatchingTvShowDto: CreateWatchingTvShowDto): Promise<WatchingTvShow> {
    return this.watchingTvShowRepository.save(createWatchingTvShowDto);
  }

  async deleteWatchingTvShow(tvshowId: number): Promise<void> {
    await this.watchingTvShowRepository.delete({ tvshowId });
  }

  async getWatchingTvShows(): Promise<WatchingTvShow[]> {
    return this.watchingTvShowRepository.find();
  }

}