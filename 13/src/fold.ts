import { Dot, Instruction } from './types';

function fold(paper: Dot[], [direction, position]: Instruction): Dot[] {
  const searchIndex = direction === 'x' ? 0 : 1;

  const newPaper = [...paper.filter((dot) => dot[searchIndex] < position)];

  return [
    ...newPaper,
    ...paper
      .filter((dot) => dot[searchIndex] > position)
      .map((dot) => {
        const newDot = [...dot];

        newDot[searchIndex] = position * 2 - dot[searchIndex];

        return newDot as Dot;
      })
      .filter(
        (dot) => !newPaper.some(([x, y]) => dot[0] === x && dot[1] === y)
      ),
  ];
}

export default fold;
