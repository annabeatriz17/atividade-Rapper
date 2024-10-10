import { Router } from "express";

const routes = Router();

import suspeitosRoutes from "./rappers.routes.js";

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

routes.use("/suspeitos", suspeitosRoutes)

export default routes