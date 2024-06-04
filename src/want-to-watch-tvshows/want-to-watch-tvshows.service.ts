import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WantToWatchTvShow } from './want-to-watch-tvshow.entity/want-to-watch-tvshow.entity';
import { CreateWantToWatchTvShowDto } from './create-want-to-watch-tvshow.dto/create-want-to-watch-tvshow.dto';
@Injectable()
export class WantToWatchTvShowsService {
  constructor(
    @InjectRepository(WantToWatchTvShow)
    private readonly wantToWatchTvShowRepository: Repository<WantToWatchTvShow>,
  ) {}

  async createWantToWatchTvShow(createWantToWatchTvShowDto: CreateWantToWatchTvShowDto): Promise<WantToWatchTvShow> {
    return this.wantToWatchTvShowRepository.save(createWantToWatchTvShowDto);
  }

  async deleteWantToWatchTvShow(tvshowId: number): Promise<void> {
    await this.wantToWatchTvShowRepository.delete({ tvshowId });
  }

  async getWantToWatchTvShows(): Promise<WantToWatchTvShow[]> {
    return this.wantToWatchTvShowRepository.find();
  }

  // Other methods as needed
}