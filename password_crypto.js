import randomPassword from "random-password"; // Import the random-password package
import crypto from "crypto"; // Import the crypto package

// Generate a random password
const generatePassword = () => {
  return randomPassword({
    length: 12, // Define the length of the password
    numbers: true, // Include numbers
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters
    symbols: true, // Include symbols
  });
};

// Hash the password using SHA-256
const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex"); // Generate a salt
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha256`)
    .toString(`hex`);
  return { salt, hash };
};

// Example usage
const password = generatePassword();
const { salt, hash } = hashPassword(password);

console.log("Generated Password:", password);
console.log("Salt:", salt);
console.log("Hashed Password:", hash);

