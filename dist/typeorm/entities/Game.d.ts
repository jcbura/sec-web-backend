import { Team } from './Team';
export declare class Game {
    id: number;
    game_date: string;
    game_time: string;
    stadium: string;
    home_team: Team;
    away_team: Team;
    home_score: number;
    away_score: number;
    conference_game: boolean;
    neutral_site: boolean;
}
