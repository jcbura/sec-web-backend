import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from 'src/games/services/games/games.service';
import { TeamParams } from 'src/dtos/TeamParams.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  getGames() {
    return this.gameService.getGames();
  }

  @Get('/sec')
  getSECCGame() {
    return this.gameService.getSECCGame();
  }

  @Get(':team')
  getNextGame(@Param() params: TeamParams) {
    return this.gameService.getNextGame(params);
  }
}
