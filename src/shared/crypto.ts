import * as bcrypt from 'bcrypt';

// CREATE HASH
export async function hashValue(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// COMPARE HASH
export async function compareWithHash(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
