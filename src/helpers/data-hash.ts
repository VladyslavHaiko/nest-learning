import * as bcrypt from 'bcrypt';

export const dataHash = {
  hashData: (dataToHash): string => bcrypt.hash(dataToHash, 10),
  compareData: (data, hash):boolean => bcrypt.compare(data, hash)
}
