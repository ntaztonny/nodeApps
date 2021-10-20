const bcrypt = require("bcrypt");

async function run(password) {
  const salt = await bcrypt.genSalt(10); // can randomly generate a string to make decrypting hard
  console.log(salt);
  const hashedPswrd = await bcrypt.hash(password, salt);
  console.log(hashedPswrd);
}

run("This-YTRSVPASSdjb.");
