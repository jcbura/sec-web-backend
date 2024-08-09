import { Module } from '@nestjs/common';
import { TeamsController } from './controllers/teams/teams.controller';
import { TeamsService } from './services/teams/teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from 'src/typeorm/entities/Team';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
