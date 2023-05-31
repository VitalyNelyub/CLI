const contacts = require("./contacts");

const workWithContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      // console.log("ALL CONTACTS", allContacts);
      return allContacts;

    case "getById":
      const getContact = await contacts.getContactById(id);
      //   console.log("ID CONTACT", getContact);
      return getContact;

    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("ADDED", newContact);
      return newContact;
  }
};

workWithContacts({ action: "read" });

workWithContacts({ action: "getById", id: "Z5sbDlS7pCzNsnAHLtDJd" });

workWithContacts({ action: "removeContact", id: "Z5sbDlS7pCzNsnAHLtDJd" });

workWithContacts({
  action: "addContact",
  name: "Vitaly Nelyub",
  email: "nelyub86@ukr.net",
  phone: "(123) 456-7890",
});
