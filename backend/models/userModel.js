const mongoose = require("mongoose");

const TicketSchema=new mongoose.Schema({
    amount:{
        type:Number,
    },
    trainNo:{
        type:Number,
    },
    trainName:{
        type:String
    },
    departureStation:{
        type:String,
    },
    departureStationNo:{
        type:Number,
    },
    destinationStation:{
        type:String,
    },
    destinationStationNo:{
        type:Number
    },
    departuredate:{
        type:String,
    },
    midstation:{
        type:String,
    },
    departuretime:{
        type:Number
    },
    coach:{
        type:String
    },
    seatNo:{
        type:String,
    },
    berth:{
        type:String
    },
    canceled:{
        type:Boolean
    },
    cancelationOnTrack:{
        type:Boolean
    }
    
    

})

const userSchema = mongoose.Schema(
  {
    fullName: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    phone:{
        type:"Number",
        required:true,
        unique:true
    },
    
    tickets:[TicketSchema]

   
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;