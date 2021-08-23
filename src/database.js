const mongoose = require("mongoose");

const mongose_uri = `mongodb://${process.env.HOST}/${process.env.DB}`;

mongoose
  .connect(mongose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DATABASE IS CONNECTED"))
  .catch((err) => console.log(err));
