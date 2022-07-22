import { server } from '../src/server.js'


    let port = 4000
    server.listen(port)
    .on('listening', () => console.log(`running at: ${port}`));
    //port++;

export { server as testServer }