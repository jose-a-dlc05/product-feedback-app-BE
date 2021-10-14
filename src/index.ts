import express from 'express';
import router from './routes';
import cors from 'cors';
import './lib/env';

const app: express.Express = express();
app.use(cors);
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});

export default app;
