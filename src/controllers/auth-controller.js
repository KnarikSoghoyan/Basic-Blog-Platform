import { create, read } from '../storages/mongodb.js';

export async function loginUser (req, res) {
    try{
        const { email, password} = req.body      //repeatPassword
        const user = await read ('users',email)
        
        const userEmail =  user.email;
        const username =   user.username

        const token =  JWT.sign({email:userEmail,username,ownerId:user._id},secret,{expiresIn: '15m'})
        console.log (token)
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
