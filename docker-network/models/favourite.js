import { Schema,model } from "mongoose";

const favmodel= new Schema({
    type: String,
    name: String
})

export const Favourite=model('Favourite',favmodel);
