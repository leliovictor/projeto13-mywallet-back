import app from "./app.js";
import mongoConnect from "./config.js";

mongoConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});


/*
app.get('/', (_req: Request, res: Response) => {
    res.send(`
    Application online. 
    Server listening on port ${PORT}.
    `);
  });
*/