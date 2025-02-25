import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Failed to hash password');
  }
};


export const verifyPassword = async (
  password,
  hashedPassword
) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error verifying password:', error);
    throw new Error('Failed to verify password');
  }
};
