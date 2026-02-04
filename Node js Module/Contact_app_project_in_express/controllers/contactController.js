import contact from "../Models/contact.js";
// get all contacts 
export const getAllContact = async (req, res) => {
    const contacts = await contact.find()
    // res.json(contacts)
    res.render("home", { contacts })
};
// SHOW CONTACT
export const showContact = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    res.render("showContact", { contact });
};

// ADD CONTACT PAGE
export const addContactPage = (req, res) => {
    res.render("addContact");
};

// ADD CONTACT POST
export const addContact = async (req, res) => {
    await Contact.create(req.body);
    res.redirect("/");
};

// UPDATE CONTACT PAGE
export const updateContactPage = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    res.render("updateContact", { contact });
};

// UPDATE CONTACT POST
export const updateContact = async (req, res) => {
    const id = req.params.id;
    await Contact.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

// DELETE CONTACT
export const deleteContact = async (req, res) => {
    const id = req.params.id;
    await Contact.findByIdAndDelete(id);
    res.redirect("/");
};

