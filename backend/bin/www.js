import { createServer } from 'http';
import app from '../app.js';
import env from '../env.js';

const server = createServer(app);

server.listen(env.PORT, () => console.log(`Server Started On ${env.PORT}`));
