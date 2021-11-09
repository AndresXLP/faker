const fs = require("fs");
const faker = require("faker");

fs.writeFile("names.txt", randomName(), function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("Nombres Generados Exitosamente");
  }
});

function randomName() {
  names = "";
  for (let i = 0; i < 1000; i++) {
    names += `${faker.name.findName()} \n`;
  }
  return names;
}
