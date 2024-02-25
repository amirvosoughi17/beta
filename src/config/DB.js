import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
             useNewUrlParser: true,    
            useUnifiedTopology: true,
     })
     console.log("App Connected to DB") 
    } catch (error) {
        throw new Error("cant connect to database");
    }
}