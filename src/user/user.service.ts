import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { resolve } from 'path';
import { rejects } from 'assert';

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
      const success = Math.random() > 0.3;
      if (success) {
        resolve('user:adheeb');
      } else {
        reject(new Error('failed to fetch'));
      }
    }, 1000);
  });
}
fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
