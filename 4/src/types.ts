export type BingoCell = {
  value: number;
  marked: boolean;
};

export type BingoRow = BingoCell[];

export type BingoBoard = BingoRow[];
