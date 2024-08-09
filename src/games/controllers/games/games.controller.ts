import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from 'src/games/services/games/games.service';
import { GetTeamParams } from 'src/utils/GetTeamParams';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  getGames() {
    return this.gameService.getGames();
  }

  @Get(':team')
  getNextGame(@Param() params: GetTeamParams) {
    return this.gameService.getNextGame(params);
  }
}
