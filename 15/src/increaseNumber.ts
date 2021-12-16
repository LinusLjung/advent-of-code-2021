function increaseNumber(
  number: number,
  increase: number,
  cap: number,
  min: number
) {
  const sum = number + increase;

  if (sum >= cap) {
    return (sum % cap) + min;
  }

  return sum;
}

export default increaseNumber;
