import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Andson Santos',
      email: 'andson.santos@valor-software.com',
      avatar_url: 'https://github.com/andsonjosef.png'
    }
  }
}

export async function getUser() {
  await delay();

  return {
    user: {
      name: 'Andson Santos',
      email: 'andson.santos@valor-software.com',
      avatar_url: 'https://github.com/andsonjosef.png'
    }
  }
}