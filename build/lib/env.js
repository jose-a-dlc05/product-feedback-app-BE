"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
// config will ready the env file, parse the contents, and assign it to
// process.env and it returns an Object with a parsed key containing the loaded content or an
// error key if it failed
const dotenv_1 = require("dotenv");
// Specifying the custom path since .env file is located in the root folder.
dotenv_1.config({ path: path_1.resolve(__dirname, '../../.env') });
