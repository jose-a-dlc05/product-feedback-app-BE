import express from 'express';
import router from './routes';
import './lib/env';
const application = express();
application.use(express.json());
application.use(router);
application.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
export default application;
