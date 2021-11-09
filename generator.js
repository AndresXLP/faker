const fs = require("fs");
const faker = require("faker");

function randomName() {
  names = "";
  for (let i = 0; i < 1000; i++) {
    names += faker.name.findName();
    names += "\n";
  }
  return names;
}

console.log("Listo para escribir archivo");
fs.writeFile("names.txt", randomName(), function (err) {
  if (err) {
    return console.error(err);
  }
});
