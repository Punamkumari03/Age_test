

let questions = [
    {
        id: 1,
        question: " Q1. Are you a realistic person?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "None of these"
        ]
    },
    {
        id: 2,
        question: " Q2. What is your favourite food?",
        answer: "Salads",
        options: [
            "Burger",
            "Salads",
            "Soup"
        ]
    },
    {
        id: 3,
        question: " Q3. Do you have a high tolerance level?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Sometimes"
        ]
    },
    {
        id: 4,
        question: "Q4. How often do you cry?",
        answer: "sometimes",
        options: [
            "Everyday",
            "No",
            "sometimes"
        ]
    },
    {
        id: 5,
        question: "Q5. What is your favorite part of the day?",
        answer: "Morning",
        options: [
            "Midday",
            "Morning",
            "Night"
        ]
    },
    {
        id: 6,
        question: "Q6. How often do you get angry?",
        answer: "Offen",
        options: [
            "Yes",
            "No",
            "Offen"
        ]
    },
    {
        id: 7,
        question: "Q7. Do you have friends older than you?",
        answer: "Yes,many",
        options: [
            "Yes,many",
            "No",
            "None of these"
        ]
    },
    {
        id: 8,
        question: "Q8. Do you like to get up early in the morning?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Never"
        ]
    },
    {
        id: 9,
        question: "Q9. Do you care about your style?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "None of these"
        ]
    },
    {
        id: 10,
        question: "Q10. What would you do if you won the lottery?",
        answer: "Save money",
        options: [
            "Buy a new car",
            "Buy a new house",
            "Save money"
        ]
    },
    {
        id: 11,
        question: "Q11. What has the highest value to you?",
        answer: "Loyalty",
        options: [
            "Loyalty",
            "Fun",
            "Happiness"
        ]
    },
    {
        id: 12,
        question: "Q12. Have you ever gone through hard times?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Sometime"
        ]
    },
    {
        id: 13,
        question: "Q13. Do you care about the environment?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Sometime"
        ]
    },
    {
        id: 14,
        question: "Q14. Do you want to live alone?",
        answer: "Sometime",
        options: [
            "Yes",
            "No",
            "Sometime"
        ]
    },
    {
        id: 15,
        question: "Q15. How often do you miss a deadline?",
        answer: "Sometime",
        options: [
            "Always",
            "No",
            "Sometime"
        ]
    },
    {
        id: 16,
        question: "Q16. Would you like to go on a trip abroad?",
        answer: "Sometime",
        options: [
            "Yes",
            "No",
            "Sometime"
        ]
    },
    {
        id: 17,
        question: "Q17. Are you very emotional?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Sometime"
        ]
    },
    {
        id: 18,
        question: "Q18. Where would you like to live?",
        answer: "In Village",
        options: [
            "In City",
            "In Village",
            "Out Of Country"
        ]
    },
    {
        id: 19,
        question: "Q19. How often do you sing?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Offen"
        ]
    },
    {
        id: 20,
        question: "Q20. Do you want to grow up?",
        answer: "Offen",
        options: [
            "Yes",
            "No",
            "Offen"
        ]
    },
    {
        id: 21,
        question: "Q21. Do you enjoy laughing at other people?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "None of These"
        ]
    },
    {
        id: 22,
        question: "Q22. Do you enjoy reading books?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Offen"
        ]
    },
    {
        id: 23,
        question: "Q23. Do you have a plan for the future?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Offen"
        ]
    },
    {
        id: 24,
        question: "Q24. Your Gender:",
        answer: "None of these",
        options: [
            "Male",
            "Female",
            "None of these"
        ]
    }


];



function submitForm(e) {
    e.preventDefault();
    location.href = "quiz.html";
}

let question_count = 0;
let points = 0;

window.onload = function () {
    show(0);
}

function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    //check answer by user
    // if (user_answer == questions[question_count].answer) {
    //     point += 10;
    //     sessionStorage.setItem("points", point);
    // }
   
// check if the answer is right or wrong
if (user_answer == questions[question_count].answer) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

 






    if (question_count == questions.length - 1) {
        location.href = "age.html";
        
    }
    console.log(question_count);


    question_count++;
    show(question_count);

}
function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third] = questions[count].options;

  question.innerHTML = `
  <h1>${questions[count].question}</h1>
  <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  
</ul> 
    `;

    toggleActive();
}
function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }
    }
}