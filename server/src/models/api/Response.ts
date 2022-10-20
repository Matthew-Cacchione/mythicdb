import { Affix } from "./Affix";

export interface Response {
  statusCode: number;
  region: string;
  title: string;
  leaderboard_url: string;
  affix_details: Affix[];
}
