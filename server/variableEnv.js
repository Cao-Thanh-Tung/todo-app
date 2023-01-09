const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const privateKey = process.env.PrivateKey;
module.exports = { PORT, privateKey };
