const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "HW-1/db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (id) => {
  try {
    const contactId = String(id);
    const contacts = await listContacts();
    const findContact = contacts.find((contact) => contact.id === contactId);
    return findContact || null;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (data) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (id) => {
  try {
    const contactId = String(id);
    const contacts = await listContacts();
    const findContactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (findContactIndex === -1) {
      return null;
    }
    const [result] = contacts.splice(findContactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
