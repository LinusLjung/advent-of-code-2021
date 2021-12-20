export const VERSION_SIZE = 3;
export const TYPE_ID_SIZE = 3;
export const HEADER_SIZE = VERSION_SIZE + TYPE_ID_SIZE;
export const LENGTH_TYPE_ID_SIZE = 1;

export enum TYPE_ID {
  LITERAL_VALUE = 4,
}

export enum LENGTH_TYPE_ID {
  SUB_PACKETS_LENGTH = 0,
  SUB_PACKETS_COUNT = 1,
}

export enum LENGTH_TYPE_ID_SIZES {
  SUB_PACKETS_LENGTH = 15,
  SUB_PACKETS_COUNT = 11,
}
