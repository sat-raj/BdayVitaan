
let questions = [
  {
    id: 1,
    question: "She's your sister,just not biological. She slangs more than you do",
    answer: "Anushka",
    options: [
      "Uzma",
      "Anushka",
      "Khushali",
      "Smriti"
    ],
    drive:"https://drive.google.com/file/d/14ryYzHLWGpEbmM-Dbl7xo26rTReM6rSX/view"
  },
  {
    id: 2,
    question: "Our environment has almost 21% Oxygen and this guy still can't get enough of it. A laborious and intelligent student.",
    answer: "Aryan",
    options: [
      "Adarsh",
      "Aryan",
      "Anushka",
      "Uzma"
    ],
    drive:"https://drive.google.com/file/d/15F-u0rFNLz3FSoK0LBde9NKgUtSkYpYy/view"
  },
  {
    id: 3,
    question: "He was well ahead of his time.Come political subjects-his presence was intimidating. He might have been the first poet you have so far encountered.",
    answer: "Vikram",
    options: [
      "Nav",
      "Hrithik",
      "Satyam",
      "Vikram"
    ],
    drive: "https://drive.google.com/file/d/1oT8NLQD4tuBVJy4-MSp_bxVx6wWIax4N/view?usp=sharing"
    
  },
  {
    id: 4 ,
    question: "He's the one blossoming in your garden of friendship. The developments are recent. The guy has charms of his own and you'd better not fall for it",
    answer: "Satyam",
    options: [
      "Satyam",
      "Adarsh",
      "Vikram",
      "Hrithik"
    ],
    drive:"https://drive.google.com/file/d/1EJSaHcFsXy_n2w2GJVALJZskENgDKgKN/view?usp=sharing"
  }
  ,
  {
    id: 5,
    question: "Oh the multi-talented boy! Need i say more,I will nevertheless. He's exuberant,brings liveliness in outings or gatherings and is quite popular among ladies.",
    answer: "Hrithik",
    options: [
      "Aryan",
      "Nav",
      "Hrithik",
      "Vikram"
    ],
    drive:"https://drive.google.com/file/d/1NtCeB7kBomXq7lGye9pP3nl9mr4tPbHv/view"
  }
  ,
  {
    id: 6,
    question: "She's the only the 2nd lady in the group and is the partner in crimes of one of your friend. Do you not miss sewaiyaan?",
    answer: "Uzma",
    options: [
      "Anushka",
      "Uzma",
      "Smriti",
      "Khushali"
    ],
    drive:"https://drive.google.com/file/d/1oMtQHoa5prm6zFZ9bnSvSmlQMuFiuCNM/view?usp=sharing"
  }
  ,
  {
    id: 7,
    question: "The jobless guy with an iPhone,though not the only one. The silver medalist of Sports day back in 2016! who gets turned on by mirrors.",
    answer: "Nav",
    options: [
      "Adarsh",
      "Nav",
      "Hrithik",
      "Vikram"
    ],
    drive:"https://drive.google.com/file/d/16RsevSqCVA-QDeVH75q8GgsMGHhreWxC/view?usp=sharing"
  }
  ,
  {
    id: 8,
    question: "The guy linked to every friend of yours. He is one of the best listeners in the group, just dont play AOT or he wont let anyone even whisper",
    answer: "Adarsh",
    options: [
      "Adarsh",
      "Nav",
      "Hrithik",
      "Vikram"
    ],
    drive:"https://drive.google.com/file/d/14vPVZl1xNNQhLBvsVwaG-XtDykBCxVVB/view?usp=drivesdk"
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};
let wishes=document.querySelector(".wish");
let abuse= document.querySelector(".no-wish")
function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {

    location.href = "end.html";
  }
  console.log(question_count);
  question_count++;
  show(question_count);
  wishes.style.display="none";
  abuse.style.display="none"
  // check if the answer is right or wrong
}
function wish()
{
  //alert("This is an Alert!");
  let user_answer = document.querySelector("li.option.active").innerHTML;
  let glink= document.querySelector(".glink");
  if (user_answer == questions[question_count].answer) {
    wishes.style.display="block";
    glink.href=questions[question_count].drive
    abuse.style.display="none"
  }
  else{
    wishes.style.display="none";
    abuse.style.display="block"
  }
  console.log(points);

  
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
