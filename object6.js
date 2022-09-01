/**
 * . সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
 */
const student = {
    name: 'Ismail Hossen',
    roll: 771,
    depertment: 'BSS'
}
const {name, roll, depertment} = student;
console.log(depertment);//BSS
const numbers = [22, 44, 55, 66, 77,88];
const [num1, balance] = numbers;
console.log(balance);//44