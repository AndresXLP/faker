import fs from "fs";
import randomNames from "./randomName.js";

fs.writeFile("names.txt", randomNames, (err) => {
  err ? console.error(err) : console.log("Nombres Generados Exitosamente");
});
