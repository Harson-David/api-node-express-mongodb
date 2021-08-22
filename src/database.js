const mongoose = require("mongoose");

const mongose_uri = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose
  .connect(mongose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DATABASE IS CONNECTED"))
  .catch((err) => console.log(err));
