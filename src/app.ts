
import * as dotenv from "dotenv";
dotenv.config();

import cors  from "cors";
import express, { Application } from 'express'

const app:Application = express();

const main = () => {
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());
  app.use("/", require("./router/aut"))

  try {
    app.listen(PORT, () =>{
      console.log(`Escuchando en el puerto ${PORT}`)
    })
  } catch (error) {
    console.log(`Error al inicar el servidor`)
  }
};

main();
