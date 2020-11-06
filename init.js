import app from "./app";
import config from "./config"
const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);