import EthUtil from 'ethereumjs-util';
import { addTrailing0x } from './util';

/**
 * Generate publicKey from the privateKey.
 * This creates the uncompressed publicKey,
 * where 04 has stripped from left
 * @returns {string}
 */
export default function publicKeyOfPrivateKey(privateKey) {
    privateKey = addTrailing0x(privateKey);
    var publicKeyBuffer = EthUtil.privateToPublic(privateKey);
    return publicKeyBuffer.toString('hex');
}