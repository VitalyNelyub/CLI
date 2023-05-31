const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
// console.log(path)
// console.log(__dirname)

const contactsPath = path.join(__dirname, "HW-1/db/contacts.json");
// console.log(contactsPath);

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  // console.log(data);
  // console.log("PARSED",JSON.parse(data));
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const findContact = contacts.find((contact) => contact.id === id);
  return findContact || null;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  // console.log(newContact);
  contacts.push(newContact);
  // console.log(contacts)
  // console.log(contactsPath)
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
