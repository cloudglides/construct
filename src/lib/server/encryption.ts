import { env } from '$env/dynamic/private';
import Cryptr from 'cryptr';

const cryptr = new Cryptr(env.APP_SECRET_KEY);

export function encrypt(plaintext: string) {
	return cryptr.encrypt(plaintext);
}

export function decrypt(ciphertext: string) {
	return cryptr.decrypt(ciphertext);
}
