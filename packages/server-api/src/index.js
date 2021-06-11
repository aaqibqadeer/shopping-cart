import express from "express";
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // default port to listen

app.use(express.json());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // renders 'OK' if project is working fine on default route
    res.send( "OK" );
});

// start the express server
app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }` );
});