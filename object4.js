/**
 * ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

 */
const numbers = [22, 44, 55, 77, 66, 88, 99];
const newArr = numbers.map(element => { return element / 7});
// console.log(newArr)