import { User } from '../models/user-model.js';
import { createUserToken } from '../libs/token-lib.js';


async function registration(req, res) {
    try {
        const { username, email, password, repeatPassword } = req.body

        if (password !== repeatPassword) {
            throw new Error('Passwords does not match')
        }

        const user = await User.create({ username, email, password });
        res.status(201).send({ data: user });
    } catch (e) {
        res.status(404).send({ data: e.message })
    }
}


async function login(req, res) {
    try {
        const { username, password } = req.body

        const user = await User.find({ username, password }).select('username')

        if (!user.length) {
            throw new Error("You are not registrated!!!")
        }

        const [userInfo] = user
        console.log(userInfo, 'userInfo')

        const token = await createUserToken({ _id: userInfo._id, username: userInfo.username });
        res.status(201).send({ data: user, token })
    } catch (e) {
        res.status(404).send({ data: e.message })
    }
}


export { registration, login }