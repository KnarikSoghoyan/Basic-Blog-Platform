import { create, read, update, del } from '../storages/mongodb.js';

export async function createUser (req, res) {
    try {
        // const { username, email, password, repeatPassword, gender, birthday} = req.body;
        await create("users", req.body)
        res.status(201).send({ data: "User successfully created" })
    } catch (e) {
        res.status(404).send({ data: "User already exists!!!!" })
    }
};

export async function readUser (req, res) {
    try {
        const { email } = req.params
        const users = await read('users', email);
        res.status(200).send({ data: users })
    } catch (e) {
        res.status(404).send({ data: 'Something happened' })
    }
};

export async function updateUser (req, res) {
    try {
        const { email, username } = req.body
        await update('users', { email }, { username })
        res.status(200).send({ data: "User successfully updated" })
    } catch (e) {
        res.status(404).send({ data: "User is not updated" })
    }
};

export async function deleteUser (req, res) {
    try {
        const { email } = req.params;
        await del('users', email);
        res.status(200).send({ data: "User successfully deleted" })
        // const deletedUser = await del('users', email );
        // res.status(200).send({ data:deletedUser })
    } catch (e) {
        res.status(404).send({ data: "User is not deleted" })
        // res.status(404).send(e.message)
    }
};