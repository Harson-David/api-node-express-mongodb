require("dotenv").config();

const app = require('./server');
require("./database")

app.listen(app.get("port"), () => {
  console.log(`DATABASE ${process.env.DB_NAME} ON PORT =`, app.get("port"));
});
