import { createServer } from 'http';
import app from '../app.js';
import env from '../env.js';

const server = createServer(app);

server.listen(env.PORT, () => console.log(`Server Started On ${env.PORT}`));

server.on('close',()=>console.log('Server Closed'));

server.on('error',(error)=>{
    if(error.code=='EADDRINUSE'){
        console.log(`${error.port} is already in use.`);
    }
})
