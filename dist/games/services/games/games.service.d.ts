import { Game } from 'src/typeorm/entities/Game';
import { TeamParams } from 'src/dtos/TeamParams.dto';
import { Repository } from 'typeorm';
export declare class GamesService {
    private readonly gameRepository;
    constructor(gameRepository: Repository<Game>);
    getGames(): Promise<any>;
    getNextGame(params: TeamParams): Promise<any>;
    getSECCGame(): Promise<any>;
}
