import express, { Request, Response } from 'express';
import router from './routes';
import './lib/env';

const application: express.Express = express();
application.use(express.json());
application.use(router);

application.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});

export default app;
