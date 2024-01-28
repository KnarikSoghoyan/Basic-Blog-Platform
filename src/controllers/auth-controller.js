import { create, read } from '../storages/mongodb.js';
import { createUserToken, verifyToken } from '../libs/token-lib.js';


export async function loginUser (req, res) {
    try{
        const { username, email, password} = req.body      // _id, repeatPassword
        const user = await read ('users',email)  // _id

        const token = await createUserToken(req.body);
        // console.log (token, "token") 
        const verifiedToken = await verifyToken(token);
        // console.log (verifiedToken, "verified token")

        const {authorization} = req.headers
        const checkAuthorization = await verifyToken(authorization);
        // console.log(checkAuthorization);

        res.status(201).send({data:user,token})   
    } catch (e) {
        res.status(404).send({data:e.message})
    }
};

export async function registrateUser (req, res) {
    try {
        const { username, email, password, repeatPassword, gender, birthday} = req.body
        const registratedUser = await create("users", { username, email, password, repeatPassword, gender, birthday });
        res.status(201).send({data: registratedUser});
    } catch (e) {
        res.status(404).send({data:e.message})
    }
};
