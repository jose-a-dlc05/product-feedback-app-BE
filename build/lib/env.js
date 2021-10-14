import { resolve } from 'path';
// config will ready the env file, parse the contents, and assign it to
// process.env and it returns an Object with a parsed key containing the loaded content or an
// error key if it failed
import { config } from 'dotenv';
// Specifying the custom path since .env file is located in the root folder.
config({ path: resolve(__dirname, '../../.env') });
