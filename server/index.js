import express from 'express';

import dotenv from 'dotenv';

//Database Connection 
import ConnectDB from "./database/connection";

import Auth from "./api/auth";

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running",
    });
});

// /auth/signup
zomato.use("/auth", Auth);

const PORT = 4005;

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running but database connection failled...");
            console.log(error);
        });

});