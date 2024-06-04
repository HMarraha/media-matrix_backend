import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/User';
import { WatchedMoviesModule } from './watched-movies/watched-movies.module';
import { WatchingMoviesModule } from './watching-movies/watching-movies.module';
import { WantToWatchMoviesModule } from './want-to-watch-movies/want-to-watch-movies.module';
import { WatchedTvshowsModule } from './watched-tvshows/watched-tvshows.module';
import { WatchingTvshowsModule } from './watching-tvshows/watching-tvshows.module';
import { WantToWatchTvshowsModule } from './want-to-watch-tvshows/want-to-watch-tvshows.module';
import { WatchedMovie } from './watched-movies/watched-movie.entity/watched-movie.entity';
import { WatchedTvShow } from './watched-tvshows/watched-tvshow.entity/watched-tvshow.entity';
import { WantToWatchMovie } from './want-to-watch-movies/want-to-watch-movie.entity/want-to-watch-movie.entity';
import { WantToWatchTvShow } from './want-to-watch-tvshows/want-to-watch-tvshow.entity/want-to-watch-tvshow.entity';
import { WatchingMovie } from './watching-movies/watching-movie.entity/watching-movie.entity';
import { WatchingTvShow } from './watching-tvshows/watching-tvshow.entity/watching-tvshow.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'W7301@jqir',
    database: 'mediamatrix',
    entities: [User, WatchedMovie, WatchedTvShow,WantToWatchMovie,WantToWatchTvShow,WatchingMovie,WatchingTvShow],
    synchronize: true,
  }), UsersModule, WatchedMoviesModule, WatchingMoviesModule, WantToWatchMoviesModule, WatchedTvshowsModule, WatchingTvshowsModule, WantToWatchTvshowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
