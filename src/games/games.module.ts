import { Module } from '@nestjs/common';
import { GamesController } from './controllers/games/games.controller';
import { GamesService } from './services/games/games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), TeamsModule],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
