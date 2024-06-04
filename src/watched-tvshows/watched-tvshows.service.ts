import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WatchedTvShow } from './watched-tvshow.entity/watched-tvshow.entity';
import { CreateWatchedTvShowDto } from './create-watched-tvshow.dto/create-watched-tvshow.dto';
@Injectable()
export class WatchedTvShowsService {
  constructor(
    @InjectRepository(WatchedTvShow)
    private readonly watchedTvShowRepository: Repository<WatchedTvShow>,
  ) {}

  async createWatchedTvShow(createWatchedTvShowDto: CreateWatchedTvShowDto): Promise<WatchedTvShow> {
    return this.watchedTvShowRepository.save(createWatchedTvShowDto);
  }

  async deleteWatchedTvShow(tvshowId: number): Promise<void> {
    await this.watchedTvShowRepository.delete({ tvshowId });
  }

  async getWatchedTvShows(): Promise<WatchedTvShow[]> {
    return this.watchedTvShowRepository.find();
  }

}