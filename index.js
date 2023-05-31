const contacts = require("./HW-1/db/conacts.json");
// console.log(contacts);

const workWithContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts;
          console.log("ALL CONTACTS", allContacts);
          console.log('object')
      return allContacts;
  }
};

workWithContacts({ action: "read" });
// test({ action: "getById", id: "1DEXoP8AuCGYc1YgoQ6hw" });
