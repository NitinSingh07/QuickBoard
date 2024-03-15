const mongoose = require("mongoose");


const trainTicketSchema=mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    trainNo:{
        type:Number,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    trainName:{
        type:String,
        required:true
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
});

const TrainTicket=mongoose.model("TrainTicket",trainTicketSchema);
module.exports=TrainTicket;