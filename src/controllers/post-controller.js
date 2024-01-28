import { create, read, update, del } from '../storages/mongodb.js';

import moment from 'moment'

export async function createPost(req, res) {
    try {

        // const verifiedUser = await verifyToken(authorization);
        // console.log(verifiedUser);

        const { title, body } = req.body
        const creationDate = moment().format('MM-DD-YYYY');

        await create('posts', { title, body})

        // await create('posts', { title, body, author: verifiedUser.username, creationDate, updated: false, updationDate: "", ownerId: verifiedUser._id })

        res.status(201).send({ data: "Post successfully created" })
    } catch (e) {
        res.status(404).send({ data: "Post is not created" })
    }
};