import JWT from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export async function createUserToken(userInfo) {
    const {
        _id,
        email,
    } = userInfo;

    return JWT.sign({ _id, email}, JWT_SECRET, {expiresIn: '15d'});
}

export async function verifyToken(token) {
    try {
        return await JWT.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('You are not authorized to perform this action.');
    }
}