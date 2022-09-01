/**
 * ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
 */
const student = {
    name: 'Ismail',
    salary: 5000,
    isHoenst: true,
    address: [
        {
            village: 'Kazi para',
            post: 'Kumira',
            upzilla: 'Sitakunda',
            zilla: 'Chattogram',
        },
        {
            school: 'Masajidda High School',
            college: 'Latifa Siddque Degree College',
            degree: 'Govt. City College Chittagong',
            programming: 'Programming Hero'
        }
    ],
    homeVillage: function (){
       return this.address[0].village + ` village is ${this.name} Home Town`;
    },
    forFamily: function(amuount, medicine){
       return this.salary = this.salary - amuount - medicine;
    },
    friends: {
        sabbir: {job: 'dipo manager'},
        tushar: {job: 'business man'},
        akib: {job: 'diller'},
        foysal: {job: 'superviser'},
        ratul: {job: 'lead manager at programming hero'}
    }
};
// console.log(student);
const result = student.homeVillage();
console.log(result);
const cost = student.forFamily(2000, 100);
console.log(cost)