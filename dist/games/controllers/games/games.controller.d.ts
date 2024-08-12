import { GamesService } from 'src/games/services/games/games.service';
import { TeamParams } from 'src/dtos/TeamParams.dto';
export declare class GamesController {
    private readonly gameService;
    constructor(gameService: GamesService);
    getGames(): Promise<any>;
    getSECCGame(): Promise<any>;
    getNextGame(params: TeamParams): Promise<any>;
}
