const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("MongoDB Connected");
  }) 
  .catch((err) => console.log(err));

async function main() { 
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from : "Anil",
        to : "Anusha",
        message : "Rey Baccha",
        created_at : new Date()
    },
    {
        from : "Anusha",
        to : "Anil",
        message : "Wt Rey Pedda Baccha",
        created_at : new Date()
    },
    {
        from : "Anil",
        to : "Shiny",
        message : "Piggy",
        created_at : new Date()
    },
    {
        from : "Nithin",
        to : "Anil",
        message : "Rey Bomma",
        created_at : new Date()
    },
    {
        from : "Nithin",
        to : "Kaki",
        message : "p** gorre",
        created_at : new Date()
    },
    {
        from : "Traun",
        to : "Nivas",
        message : "Rey Blacky gaa",
        created_at : new Date()
    }
];

Chat.insertMany(allChats);