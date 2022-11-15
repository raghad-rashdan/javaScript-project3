const quizArray = [
  {
    question:
      'What is the next number in the series (7, 10, 16, 28, 52, ___ )?',
    a: '33',
    b: '100',
    c: '66',
    d: '76',
    correct: 'b',
  },
  {
    question:
      'If you rearrange the letters (CARACTTIN) you have the name of a(n): ?',
    a: 'Continent',
    b: 'City',
    c: 'Ocean',
    d: 'Animal',
    correct: 'c',
  },
  {
    question:
      'If the first two statements are true, is the final statement true? (Mrs. Jones is responsible for collecting all of the fifth grade classes’ money for the school fundraiser.) (Sally attends Mrs. Jones’ school.) (Mrs. Jones is responsible for collecting Sally’s money for the fundraiser.)',
    a: 'yes',
    b: 'no',
    c: 'Uncertain',
    d: 'all',
    correct: 'c',
  },
  {
    question:
      ' A college professor teaches a class of 80 students. Fourteen students are business majors, six are education majors, and the rest are undecided. What percentage of the class is undecided?',
    a: '50%',
    b: '75%',
    c: '60%',
    d: '25%',

    correct: 'b',
  },

  {
    question: 'Afraid is to scared as brave is to ____?',
    a: 'courageous',
    b: 'cowardly',
    c: 'timid',
    d: '1trustworthy',
    correct: 'a',
  },

  {
    question:
      ' n organization hosts monthly meals for families in the community. In March, 70 people attended the meal. In April, 60 attended. Their highest attendance was in May, with 20 more than April. What is their average monthly attendance?',
    a: '75',
    b: '50',
    c: '80',
    d: '75',
    correct: 'd',
  },

  {
    question:
      'Which number should come next in the pattern? (37, 34, 31, 28,  )?',
    a: '30',
    b: '50',
    c: '35',
    d: '25',
    correct: 'd',
  },
  {
    question: 'The words allude and elude have ______ meanings ?',
    a: 'same',
    b: 'opposite',
    c: 'unrelated',
    d: 'A movie premiered this weekend',
    correct: 'c',
  },
  {
    question: 'completes the analogy:(Book is to Reading as Fork is to:)?',
    a: '35%',
    b: '50%',
    c: '60%',
    d: '40%',
    correct: 'd',
  },
  //hard
  {
    question:
      'Find the answer that best completes the analogy: (Book is to Reading as Fork is to ) ?',
    a: 'drawing',
    b: 'writing',
    c: 'stirring',
    d: 'eating',
    correct: 'd',
  },
  {
    question:
      'Angie’s profits for March totaled $5400. If she profited nine times more in March than in April, what were April’s profits ?',
    a: '$700',
    b: '$48,600',
    c: '$600',
    d: '$900',
    correct: 'c',
  },
  {
    question:
      'If a store sold 25 pairs of socks, making a 25% profit (i.e., percent of sales) of $150, how much did they charge for each pair?',
    a: '$30',
    b: '$15',
    c: '$20',
    d: '$24',
    correct: 'd',
  },
  {
    question: 'Apathetic is to sympathetic as ____________ is to concerned?',
    a: 'Callous',
    b: 'compassionate',
    c: 'merciful',
    d: 'kind',
    correct: 'a',
  },
  {
    question:
      'What is the missing number in the series(7, 12, 19, __, 39, 52)?',
    a: '29',
    b: '33',
    c: '26',
    d: '28',
    correct: 'd',
  },
  {
    question:
      'A family is planning a vacation, traveling 300 miles from their house.If they plan to stop at parks to allow the children to play every two hours, how many parks will they visit before they reach their destination assuming they travel 60 mph? ',
    a: '3',
    b: '1',
    c: '2',
    d: '4',
    correct: 'c',
  },
  {
    question: 'The words gallant and valiant have ________ meanings.',
    a: 'none',
    b: 'Same',
    c: 'Opposite',
    d: 'Unrelated',
    correct: 'b',
  },
  {
    question:
      'Which of the following does not have the same meaning as the other words?',
    a: 'Anxious',
    b: 'Apprehensive',
    c: 'Distressed ',
    d: 'Enthusiastic',
    correct: 'd',
  },
  {
    question: '.What is the next number in the series:(4, 5, 11, 34, 137, __ )',
    a: '237',
    b: '549',
    c: '459',
    d: '686',
    correct: 'd',
  },
  {
    question: 'Accept and except have _________ meanings ',
    a: 'Similar',
    b: 'Different',
    c: 'Unrelated',
    d: 'none',
    correct: 'c',
  },
];

function resfunction(res) {
  if (res >= 60) {
    document.getElementById('logo').style.display = 'block';
    document.getElementById('result-successful').style.display = 'block';
  } else if (res < 60) {
    document.getElementById('logo1').style.display = 'block';
    document.getElementById('result-fail').style.display = 'block';
  }
}
function closebutton() {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('closebtn').style.display = 'none';
}
let result = localStorage.getItem('result');
resfunction(result);

let answers = JSON.parse(localStorage.getItem('answers'));

console.log(result);
document.getElementsByClassName(
  'result-show'
)[0].innerHTML = `Your Result : ${result} %`;
document.getElementsByClassName(
  'result-show'
)[1].innerHTML = `Your Result : ${result} %`;
// console.log(answers)
const questionbox = document.getElementById('questions');

const questionH2 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

function openbutton() {
  document.getElementById('questions').style.display = 'block';
  document.getElementById('closebtn').style.display = 'block';
  // const currentquizArray = quizArray[currentQuiz]
  // questionH2.innerText = currentquizArray.question
  // a_text.innerText = currentquizArray.a
  // b_text.innerText = currentquizArray.b
  // c_text.innerText = currentquizArray.c
  // d_text.innerText = currentquizArray.d

  for (let i = 0; i < quizArray.length; i++) {
    console.log(answers[i]);
    questionbox.innerHTML += `
        <div class="questionbox">
            <div  id="question"><h3>${quizArray[i].question}</h3></div>
            <div class="ans">
            <div class="ansbox ${
              quizArray[i].correct == 'a' ? 'green' : 'none'
            } ${answers[i] == 'a' ? 'red' : 'none'}" id="a">${
      quizArray[i].a
    }</div>
            <div class="ansbox ${
              quizArray[i].correct == 'b' ? 'green' : 'none'
            } ${answers[i] == 'b' ? 'red' : 'none'}" id="b">${
      quizArray[i].b
    }</div>
            <div class="ansbox ${
              quizArray[i].correct == 'c' ? 'green' : 'none'
            } ${answers[i] == 'c' ? 'red' : 'none'}" id="c">${
      quizArray[i].c
    }</div>
            <div class="ansbox ${
              quizArray[i].correct == 'd' ? 'green' : 'none'
            } ${answers[i] == 'd' ? 'red' : 'none'}" id="d">${
      quizArray[i].d
    }</div></div>
        </div>
        `;
  }

  // quizArray.forEach(element => {

  // });

  // const answerDivs = document.querySelectorAll('.ansbox')
  // quizArray.forEach(element=>{
  //     console.log(answerDivs);
  //     answerDivs.forEach(oneDiv =>{
  //         console.log(oneDiv.id);
  //         if(oneDiv.id == element.correct){
  //             document.getElementById(`${oneDiv.id}`).style.color = "green"
  //         }
  //     })
  // })
}

// function loadAnswers() {

// }
