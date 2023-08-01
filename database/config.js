const mongoose = require("mongoose");

const dbConnection = async () => {
  const DATABASE_URL = process.env.DB_CNN;
  try {
    // @ts-ignore
    mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports = {
  dbConnection,
};
