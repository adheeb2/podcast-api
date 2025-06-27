import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import * as path from 'path';

function getBurger(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('burger delivered');
      } else {
        reject('burger not delivered');
      }
    }, 2000);
  });
}
getBurger()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

async function orderBurger() {
  try {
    const result = await getBurger();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
orderBurger();

function fetchUser(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('user:adheeb');
      } else {
        reject(new Error('failed to fetch user'));
      }
    }, 1000);
  });
}

fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getToken(): Promise<string> {
  const valid = true;
  if (!valid) throw new Error('failed to fetch user');
  return `token`;
}
async function validToken() {
  try {
    const success = await getToken();
    console.log(success);
  } catch (err) {
    console.log(err);
  }
}
validToken();

// type(we use type because we only need to provide structure,we cant create method or new instance from this,just for reference purpose and can only be seen in compile time and not in runtime,similar to class but can do stuffs that 'type'cannot)
type User = {
  id: number;
  email: string;
};

function signUp(email: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email.includes('@')) {
        return reject(new Error('invalid email format'));
      }
      resolve({ id: 1, email });
    }, 1000);
  });
}
async function register() {
  try {
    const success = await signUp('await@email.com');
    console.log('email', success);
  } catch (err) {
    console.log(err);
  }
}

register();

//File upload
