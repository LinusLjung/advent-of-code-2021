function splitOnNewline(input: string) {
  return input.split(/\r\n|\n\r|\n|\r/g);
}

export default splitOnNewline;
