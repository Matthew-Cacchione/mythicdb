import { Affix } from "./Affix";

export interface AffixResponse {
  statusCode: number;
  region: string;
  title: string;
  leaderboard_url: string;
  affix_details: Array<Affix>;
}
