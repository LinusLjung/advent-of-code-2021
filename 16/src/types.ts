export type Packet = {
  originalPacket: string;
  packet: string;
  subpackets?: Packet[];
};
