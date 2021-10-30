import {v4 as uuid} from 'uuid'

interface SignInRequest{
    username: string;
    password: string;
}

const delay = (amount = 750)=> new Promise(resolve=> setTimeout(resolve, amount))

export async function signInRequest( {} : SignInRequest){
    await delay();

    return {
        token: uuid(),
        user: {
            username: 'Idarcio Oliveira',
            email: 'idarciooliveira@gmail.com',
            avatar_url: 'https://github.com/idarciooliveira.png'
        }
    }

}

export async function recoverUserInformation(){

    await delay();

    return {
        user: {
            username: 'Idarcio Oliveira',
            email: 'idarciooliveira@gmail.com',
            avatar_url: 'https://github.com/idarciooliveira.png'
        }
    }

}