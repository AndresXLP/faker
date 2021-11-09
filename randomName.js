import faker from "faker";

const randomName = () => {
  let names = "";
  let i = 0;
  while (i < 1e3) {
    names += `${faker.name.findName()}\n`;
    i++;
  }
  return names;
};

export default randomName();
