import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from 'src/games/services/games/games.service';
import { TeamParams } from 'src/utils/definitions';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  getGames() {
    return this.gameService.getGames();
  }

  @Get(':team')
  getNextGame(@Param() params: TeamParams) {
    return this.gameService.getNextGame(params);
  }
}
