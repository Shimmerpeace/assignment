// local reviews data
const reviews =[
    { 
    id: 1,
    name: "stevie smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Pure love is a willingness to give without a thought of receiving anything in return. Pure love is a willingness to give without a thought of receiving anything in return."
},

{
    id: 2,
    name: "dan joe",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Pure love is a willingness to give without a thought of receiving anything in return. Pure love is a willingness to give without a thought of receiving anything in return."
},

{
    id: 3,
    name: "earls jonah",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Pure love is a willingness to give without a thought of receiving anything in return. Pure love is a willingness to give without a thought of receiving anything in return."
},
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img
});
