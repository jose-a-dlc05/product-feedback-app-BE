import express, { Request, Response } from 'express';
import router from './routes';
import './lib/env';

const app: express.Express = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});

export default app;
