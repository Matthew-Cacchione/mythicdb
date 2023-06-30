// Required packages.
import cors from "cors";
import express, { Response, Request } from "express";

// Required routers.
import affixes from "./routes/affixes";
import characters from "./routes/characters";

const PORT = 8000;

const app = express();

app.use(cors);
app.use(express.json());

// Requests for static files will look in public.
app.use(express.static("public"));

// Endpoints.
app.use(affixes);
app.use(characters);

app.get("*", (request: Request, response: Response) => {
  return response
    .status(404)
    .json({ status: 404, message: "No endpoint found." });
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
