import dotenv from "dotenv";
import { resolve } from "path";
import cors from "cors";
import helmet from "helmet";
import delay from 'express-delay';

dotenv.config();

import "./database";

import express from "express";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

const whiteList = [
  'http://localhost:3001'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== 1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middelwares();
    this.routes();
  }

  middelwares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "../uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
