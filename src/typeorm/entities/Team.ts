import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Game } from './Game';

@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  mascot: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  stadium: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  total_wins: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  total_losses: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  conference_wins: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  conference_losses: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  home_wins: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  home_losses: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  away_wins: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  away_losses: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  neutral_wins: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  neutral_losses: number;

  @Column({ type: 'int', nullable: true, default: null })
  team_rank: number;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  primary_color: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  secondary_color: string;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  sec_team: boolean;

  @OneToMany(() => Game, (game) => game.home_team)
  home_games: Game[];

  @OneToMany(() => Game, (game) => game.away_team)
  away_games: Game[];
}
