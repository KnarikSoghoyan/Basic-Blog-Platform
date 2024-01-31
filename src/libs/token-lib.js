import JWT from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export async function createUserToken(userInfo) {
    const {
        _id,
        username,
    } = userInfo;

    return JWT.sign({ _id, username}, JWT_SECRET, {expiresIn: '15d'});
}

export async function verifyToken(token) {
    try {
        return await JWT.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('You are not authorized to perform this action.');
    }
}