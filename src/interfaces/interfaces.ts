import { Suit, Team, BidAmount } from '../enums/enums';

export interface ITeamNames {
  teamOnePlayerOne: string;
  teamOnePlayerTwo: string;
  teamTwoPlayerOne: string;
  teamTwoPlayerTwo: string;
}

export interface IBid {
  id: number;
  team: Team;
  suit: Suit;
  amount: BidAmount;
  teamOneTricks: number;
  teamTwoTricks: number;
}

export interface IScoredBid extends IBid {
  teamOneScore: number;
  teamTwoScore: number;
}
