import { getPublicKey, nip19 } from "nostr-tools";

const input = process.argv[process.argv.length - 1];

const privKeyHex = nip19.decode(input);
console.log(privKeyHex);

const pubKey = getPublicKey(nip19.decode(input).data);
console.log(pubKey);

const pubKeyNpub = nip19.npubEncode(getPublicKey(nip19.decode(input).data));
console.log(pubKeyNpub);
