const quizArray = [
  {
    question:
      'What is the next number in the series (7, 10, 16, 28, 52, _ )?',
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
    question: 'Afraid is to scared as brave is to __?',
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
    question: 'The words allude and elude have __ meanings ?',
    a: 'same',
    b: 'opposite',
    c: 'unrelated',
    d: 'A movie premiered this weekend',
    correct: 'c',
  },
  {
    question: 'What number best completes the analogy: (8:4 as 10:)?',
    a: '3',
    b: '7',
    c: '25',
    d: '5',
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
    question: 'Apathetic is to sympathetic as ____ is to concerned?',
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
    question: 'The words gallant and valiant have ____ meanings.',
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
    question: 'Accept and except have ___ meanings ',
    a: 'Similar',
    b: 'Different',
    c: 'Unrelated',
    d: 'none',
    correct: 'c',
  },
  {
    question: 'The mirror image of a clock at 2:45 p.m. will show the following time: ',
    a: '9:15 p.m',
    b: '9:15 a.m',
    c: '11:15 ',
    d: 'none',
    correct: 'c',
  },

];

const quiz = document.getElementById('quiz');
const answerRadios = document.querySelectorAll('.answer');
const questionH2 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answers = [];
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentquizArray = quizArray[currentQuiz];
  questionH2.innerText = currentquizArray.question;
  a_text.innerText = currentquizArray.a;
  b_text.innerText = currentquizArray.b;
  c_text.innerText = currentquizArray.c;
  d_text.innerText = currentquizArray.d;
  // answerRadios.forEach(function (oneRadio) {
  //   if (oneRadio.id == quizArray[0].correct) {
  //     document.getElementById(`${oneRadio.id}_text`).style.color = 'green';
  //   }
  // });
}
function deselectAnswers() {
  answerRadios.forEach((oneRadio) => (oneRadio.checked = false));
}
function getSelected() {
  let answer;
  answerRadios.forEach((oneRadio) => {
    if (oneRadio.checked) {
      answer = oneRadio.id;
      answers.push(oneRadio.id);
    }
  });
  return answer;
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizArray[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz == 5) {
      document.getElementById('quiz').style.display = 'none';
      document.getElementById('next1').style.display = 'block';
    }
    if (currentQuiz == 10) {
      document.getElementById('quiz').style.display = 'none';
      document.getElementById('next2').style.display = 'block';
    }
    if (currentQuiz < quizArray.length) {
      loadQuiz();
    } else {
      localStorage.setItem('answers', JSON.stringify(answers));
      localStorage.setItem('result', JSON.stringify(score * 5));
      window.location.href = './resultpage.html';
      //    quiz.innerHTML = `
      //    <h2>You answered ${score}/${quizArray.length} questions correctly</h2>
      //    <button onclick="location.reload()">Reload</button>
      //    `
    }
  }
});

function next1Fun() {
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('next1').style.display = 'none';
}
function next2Fun() {
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('next2').style.display = 'none';
}
