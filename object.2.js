/**
 * ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
 */
const student = {
  name: "Ismail",
  salary: 5000,
  isHoenst: true,
  address: [
    {
      village: "Kazi para",
      post: "Kumira",
      upzilla: "Sitakunda",
      zilla: "Chattogram",
    },
    {
      school: "Masajidda High School",
      college: "Latifa Siddque Degree College",
    },
  ],
  homeVillage: function () {
    return this.address[0].village + ` village is ${this.name} Home Town`;
  },
  forFamily: function (amuount, medicine) {
    return (this.salary = this.salary - amuount - medicine);
  },
  friends: {
    sabbir: { job: "team manager" },
    tushar: { job: "business man" },
    akib: { job: "singer" },
    foysal: { job: "shopkipper" },
    ratul: { job: "magician" },
  },
};
const tString = `Ismail 5000 true sabbir school`;