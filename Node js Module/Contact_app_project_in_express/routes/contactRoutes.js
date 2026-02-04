import express from "express";
import {
    getAllContact,
    showContact,
    addContactPage,
    addContact,
    updateContactPage,
    updateContact,
    deleteContact,

} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getAllContact);

router.get("/showContact/:id", showContact);

router.get("/addContact", addContactPage);
router.post("/addContact", addContact);

router.get("/updateContact/:id", updateContactPage);
router.post("/updateContact/:id", updateContact);

router.get("/deleteContact/:id", deleteContact);

export default router;
