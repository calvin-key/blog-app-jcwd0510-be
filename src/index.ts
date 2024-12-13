import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
