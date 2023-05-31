const fs = require("fs/promises");
const path = require("path");
console.log(path)
// console.log(__dirname)

const contactsPath = path.join(`${__dirname}/db/contacts.json`);
console.log(contactsPath);

const listContacts = async () => {
    const data = await fs.readFile(contactsPath, "utf-8");
    // console.log(data)
//   console.log("PARSED",JSON.parse(data));
  return JSON.parse(data);
};

module.exports = {
  listContacts,
};

