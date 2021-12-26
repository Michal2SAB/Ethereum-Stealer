"use strict";

process.title = "Ethereum Stealer (test) by Michal2SAB";

const genEth = require('ethers');
const fs = require('fs');

const riches = fs.readFileSync('./testriches.txt');

function generate() {
    var phrase = 'salon subway toe little equal lock menu ignore truly dash attract fury'; // or create new wallet and write your own words
    var wallet = genEth.Wallet.fromMnemonic(phrase);
    console.log(wallet.address);
    if(riches.includes(wallet.address)){
        console.log("")
        process.stdout.write('\x07');
        console.log("\x1b[32m%s\x1b[0m", ">> Success: " + wallet.address)
        var successString = "Wallet: " + wallet.address + "\n\nPrivate Key: " + wallet.privateKey + "\n\n12 word phrase: " + phrase;
        fs.writeFileSync('./Success.txt', successString, (err) => {  
            if (err) throw err; 
        })
        process.exit()
    }
}

while(true){
    generate()
}
