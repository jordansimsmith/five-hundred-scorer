export interface IBid {
  id: number;
}

export interface IBidStore {
  createBid(bid: IBid): number;
  allBids(): Array<IBid>;
  oneBid(id: number): IBid;
  updateBid(bid: IBid): void;
  deleteBid(id: number): void;
  clearBids(): void;
}

export class StaticBidStore implements IBidStore {
  private static bids: Map<number, IBid> = new Map<number, IBid>();
  private static counter: number = 0;

  public createBid(bid: IBid): number {
    const id: number = ++StaticBidStore.counter;
    StaticBidStore.bids.set(id, bid);
    return id;
  }

  public allBids(): Array<IBid> {
    return [...StaticBidStore.bids.values()].sort(
      (b1: IBid, b2: IBid) => b1.id - b2.id
    );
  }

  public oneBid(id: number): IBid {
    return StaticBidStore.bids.get(id);
  }

  public updateBid(bid: IBid): void {
    StaticBidStore.bids.set(bid.id, bid);
  }

  public deleteBid(id: number): void {
    StaticBidStore.bids.delete(id);
  }

  public clearBids(): void {
    StaticBidStore.bids.clear();
    StaticBidStore.counter = 0;
  }
}
