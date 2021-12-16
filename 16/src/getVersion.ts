function getVersion(packet: string): number {
  return parseInt(packet.substring(0, 3), 2);
}

export default getVersion;
