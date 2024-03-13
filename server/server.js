import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())


const port = process.env.PORT_SERVER;
console.log('port ==>', port);
app.listen(port, () => console.log(`start server in port ${port}`));
