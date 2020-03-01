import { IScoredBid } from '../common/ScoringUtils';
import { Team } from '../enums/enums';

export class GameUtils {
  public gameEnded(scoredBids: Array<IScoredBid>): number {
    // returns 0 for game not ended, 1 for team one win, 2 for team two win

    const lastBid: IScoredBid = scoredBids[scoredBids.length - 1];
    if (!lastBid) return 0;

    if (
      (lastBid.teamOneScore >= 500 && lastBid.team === Team.One) ||
      lastBid.teamTwoScore <= -500
    ) {
      // team one wins
      return 1;
    }
    if (
      (lastBid.teamTwoScore >= 500 && lastBid.team === Team.Two) ||
      lastBid.teamOneScore <= -500
    ) {
      // team two wins
      return 2;
    } else {
      // no winner
      return 0;
    }
  }
}
