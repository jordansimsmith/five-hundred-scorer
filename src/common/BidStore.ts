import { Suit, Team, BidAmount } from '../enums/enums';

export interface IBid {
  id: number;
  team: Team;
  suit: Suit;
  amount: BidAmount;
  teamOneTricks: number;
  teamTwoTricks: number;
}
