const secureRandom = require('secure-random')
const { SHA3 } = require('sha3');

class GeneratorHMAC{
    constructor() {
        this.key = secureRandom(32, {type: 'Buffer'}).toString('hex');
    }

    generateHMAC(word){
        const hash = new SHA3(256);
        hash.update(word+this.key);
        this.HMAC = hash.digest('hex');
    }
}
module.exports = GeneratorHMAC;