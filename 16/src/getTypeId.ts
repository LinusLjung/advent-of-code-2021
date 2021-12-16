function getTypeId(packet: string): number {
  return parseInt(packet.substring(3, 6), 2);
}

export default getTypeId;
