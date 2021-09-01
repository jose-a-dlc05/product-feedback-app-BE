import express, { Request, Response } from 'express';
import './lib/env';

const app = express();

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
