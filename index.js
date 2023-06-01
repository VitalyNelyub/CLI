const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts.js");


const workWithContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      console.log("ALL CONTACTS", allContacts);
      return allContacts;

    case "getById":
      const getContact = await contacts.getContactById(id);
      console.log("ID CONTACT", getContact);
      return getContact;

    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("ADDED", newContact);
      return newContact;

    case "removeContact":
      const deleteContact = await contacts.removeContact(id);
      console.log("REMOVED", deleteContact);
      return deleteContact;
    default:
      return console.log("Not Found Action");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
workWithContacts(argv);
