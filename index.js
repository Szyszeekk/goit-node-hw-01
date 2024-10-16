const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      if (contact) {
        console.log(contact);
      } else {
        console.warn(`Contact with id ${id} not found`);
      }
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log("Contact added:", newContact);
      break;

    case "remove":
      const updatedContacts = await removeContact(id);
      console.log(`Contact with id ${id} removed`);
      console.log(updatedContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
