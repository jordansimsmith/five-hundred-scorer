import { IBid } from './BidStore';
import { Suit, Team, BidAmount } from '../enums/enums';

export interface IScoredBid extends IBid {
  teamOneScore: number;
  teamTwoScore: number;
}

export class ScoringUtils {
  public scoreBids(bids: Array<IBid>): Array<IScoredBid> {
    let teamOneScore: number = 0;
    let teamTwoScore: number = 0;

    // score each bid incrementally
    const scoredBids = bids.map(
      (bid: IBid): IScoredBid => {
        // get potential points to be won or lost by the bid
        let bidValue = this.getBidValue(bid.suit, bid.amount);

        // 250 points minimum if all 10 tricks are won
        const wonAllTen: boolean = this.getBidWinnersTricks(bid) === 10;

        bidValue = wonAllTen && 250 > bidValue ? 250 : bidValue;

        // modify bid winner's score
        const bidSuccessful = this.getBidSuccess(bid);
        const bidWinnersPointChange = bidSuccessful ? bidValue : -1 * bidValue;
        if (bid.team === Team.One) {
          teamOneScore += bidWinnersPointChange;
        } else {
          teamTwoScore += bidWinnersPointChange;
        }

        // modify bid loser's score
        const bidLosersPointChange = this.getBidLosersTricks(bid) * 10;
        if (bid.team === Team.One) {
          teamTwoScore += bidLosersPointChange;
        } else {
          teamOneScore += bidLosersPointChange;
        }

        // score bid
        return { ...bid, teamOneScore, teamTwoScore };
      }
    );

    return scoredBids;
  }

  private getBidValue(suit: Suit, amount: BidAmount): number {
    // misere special case
    if (suit === Suit.ClosedMisere) return 250;
    if (suit === Suit.OpenMisere) return 500;

    const suitValues = {
      [Suit.Spades]: 40,
      [Suit.Clubs]: 60,
      [Suit.Diamonds]: 80,
      [Suit.Hearts]: 100,
      [Suit.NoTrumps]: 120,
    };

    const bidValue: number = suitValues[suit] + (amount - 6) * 100;
    return bidValue;
  }

  private getBidSuccess(bid: IBid): boolean {
    const tricksWon: number = this.getBidWinnersTricks(bid);

    return tricksWon >= bid.amount;
  }

  private getBidWinnersTricks(bid: IBid): number {
    return bid.team === Team.One ? bid.teamOneTricks : bid.teamTwoTricks;
  }

  private getBidLosersTricks(bid: IBid): number {
    return bid.team === Team.One ? bid.teamTwoTricks : bid.teamOneTricks;
  }
}
