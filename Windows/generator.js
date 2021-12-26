"use strict";

process.title = "Ethereum Stealer by Michal2SAB";

const genEth = require('ethers');
const fs = require('fs');

const riches = fs.readFileSync('./riches.txt');

function generate() {
    var phrase = genEth.Wallet.createRandom().mnemonic.phrase;
    var wallet = genEth.Wallet.fromMnemonic(phrase);
    console.log(wallet.address);
    if(riches.includes(wallet.address)){
        console.log("")
        process.stdout.write('\x07');
        console.log("\x1b[32m%s\x1b[0m", ">> Success: " + wallet.address)
        successString = "Wallet: " + wallet.address + "\n\nPrivate Key: " + wallet.privateKey + "\n\n12 word phrase: " + phrase;
        fs.writeFileSync('./Success.txt', successString, (err) => {  
            if (err) throw err; 
        })
        process.exit()
    }
}

while(true){
    generate()
}
