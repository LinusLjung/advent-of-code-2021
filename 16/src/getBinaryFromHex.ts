function getBinaryFromHex(hex: string) {
  return hex
    .split('')
    .reduce(
      (acc, curr) => acc + parseInt(curr, 16).toString(2).padStart(4, '0'),
      ''
    );
}

export default getBinaryFromHex;
