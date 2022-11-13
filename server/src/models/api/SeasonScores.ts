import { Segments } from "./Segments";
import { Scores } from "./Scores";

export interface SeasonScores {
  season: string;
  scores: Scores;
  segments: Segments;
}
