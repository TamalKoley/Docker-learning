import {Schema,model} from "mongoose";

const DBSchema= new Schema({
    text: String
})

export const GoalsSchema=model('GoalsSchema',DBSchema);