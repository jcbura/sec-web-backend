import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team } from './Team';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: false })
  game_date: string;

  @Column({ type: 'time', nullable: true, default: null })
  game_time: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  stadium: string;

  @ManyToOne(() => Team, (team) => team.home_games)
  @JoinColumn({ name: 'home_id' })
  home_team: Team;

  @ManyToOne(() => Team, (team) => team.away_games)
  @JoinColumn({ name: 'away_id' })
  away_team: Team;

  @Column({ type: 'int', nullable: true, default: null })
  home_score: number;

  @Column({ type: 'int', nullable: true, default: null })
  away_score: number;

  @Column({ type: 'tinyint', nullable: false, default: 1 })
  conference_game: boolean;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  neutral_site: boolean;
}
