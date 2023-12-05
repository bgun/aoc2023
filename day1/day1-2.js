import { open } from 'node:fs/promises';
myFileReader();
async function myFileReader() {
    const file = await open('./input.txt');
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let total = 0;
    for await (const line of file.readLines()) {
        let num = line.replace(/[^\d]/g, "");
        let len = num.length;
        let first = num[0];
        let last = num[len-1];
        total += parseInt(first+''+last);
    }
    console.log(total);
}