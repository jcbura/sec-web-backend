import { Game } from './Game';
export declare class Team {
    id: number;
    name: string;
    mascot: string;
    stadium: string;
    total_wins: number;
    total_losses: number;
    conference_wins: number;
    conference_losses: number;
    home_wins: number;
    home_losses: number;
    away_wins: number;
    away_losses: number;
    neutral_wins: number;
    neutral_losses: number;
    team_rank: number;
    primary_color: string;
    secondary_color: string;
    sec_team: boolean;
    home_games: Game[];
    away_games: Game[];
}
