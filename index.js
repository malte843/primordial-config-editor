// add skins from config1.txt to config2.txt
// write changes to output.txt

const fs = require('fs');

function encode(data) {
    let buff = Buffer.from(data);
    return buff.toString('base64');
}

function decode(data) {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('ascii');
}

const data1 = fs.readFileSync('./config1.txt',
    { encoding: 'utf8', flag: 'r' });
const config1 = JSON.parse(decode(data1));

const data2 = fs.readFileSync('./config2.txt',
    { encoding: 'utf8', flag: 'r' });
const config2 = JSON.parse(decode(data2));

config2.skins = config1.skins;
fs.writeFileSync('./output.txt', encode(JSON.stringify(config2)));
console.log('added all skins from config1.txt to config2.txt and wrote output to output.txt')