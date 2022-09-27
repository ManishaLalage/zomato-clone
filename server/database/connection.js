import mongoose from "mongoose";


export default async() => {
    return mongoose.connect(process.env.MONGI_URL);

}