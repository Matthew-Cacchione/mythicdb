// Required types.
import { Guild } from "./Guild";
import { Run } from "./Run";
import { SeasonScores } from "./SeasonScores";

export interface Character {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  active_spec_role: string;
  gender: string;
  faction: string;
  achievement_points: number;
  honorable_kills: number;
  thumbnail_url: string;
  region: string;
  realm: string;
  last_crawled_at: string;
  profile_url: string;
  profile_banner: string;
  mythic_plus_scores_by_season: SeasonScores[];
  mythic_plus_best_runs: Run[];
  guild: Guild;
}
