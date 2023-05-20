const data = [
    {
      id: 1,
      question: "who Invented Python ?",
      answers: [
        {
          text: "Tejas Gupta",
          correct: false,
        },
        {
          text: "Guido van Rossum",
          correct: true,
        },
        {
          text: "Brendan Eich",
          correct: false,
        },
        {
          text: "Sergey Brin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Adding Two Strings is also called as ?",
      answers: [
        {
          text: "Sorting",
          correct: false,
        },
        {
          text: "Tuple",
          correct: false,
        },
        {
          text: "Concatitation",
          correct: true,
        },
        {
          text: "Direct Concatitation",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Which of the following CSS property is used to make the text bold ?",
      answers: [
        {
          text: "font-weight: bold",
          correct: true,
        },
        {
          text: " text-decoration: bold",
          correct: false,
        },
        {
          text: " font-style: bold",
          correct: false,
        },
        {
          text: "text-align: bold",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which of following is not programming language ?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Ruby",
          correct: false,
        },
        {
          text: "Css",
          correct: true,
        },
        {
          text: "PHP",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of following is not javascript framework or library ?",
      answers: [
        {
          text: "AngularJS",
          correct: false,
        },
        {
          text: "React.js",
          correct: false,
        },
        {
          text: "Echo",
          correct: false,
        },
        {
          text: "Kivy",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "In C++, dynamic memory allocation is achieved with the operator ?",
      answers: [
        {
          text: "this",
          correct: false,
        },
        {
          text: "malloc()",
          correct: false,
        },
        {
          text: "new",
          correct: true,
        },
        {
          text: "calloc()",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Deadlocks can be described by which graph ?",
      answers: [
        {
          text: "Resource-Allocation Graph",
          correct: true,
        },
        {
          text: "Hamilton Graph",
          correct: false,
        },
        {
          text: "Complete Graph",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Is Python code compiled or interpreted ?",
      answers: [
        {
          text: "only compiled",
          correct: false,
        },
        {
          text: "only interpreted",
          correct: false,
        },
        {
          text: "neither compiled nor interpreted",
          correct: false,
        },
        {
          text: "both compiled and interpreted",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "When were MS windows operating systems proposed ?",
      answers: [
        {
          text: "1990",
          correct: false,
        },
        {
          text: "1985",
          correct: true,
        },
        {
          text: "1980",
          correct: false,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "When the user tries to insert the element in stack which is full , it is said to be ... ?",
      answers: [
        {
          text: "Underflow",
          correct: false,
        },
        {
          text: "Full",
          correct: false,
        },
        {
          text: "Overflow",
          correct: true,
        },
        {
          text: "Garbage Collection",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which symbol do we use in place of the except ?",
      answers: [
        {
          text: " ¬ ",
          correct: true,
        },
        {
          text: "~",
          correct: false,
        },
        {
          text: "V",
          correct: false,
        },
        {
          text: "^",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following is true about microprocessors ?",
      answers: [
        {
          text: "It uses Harvard architecture",
          correct: false,
        },
        {
          text: "It has interfacing circuits",
          correct: false,
        },
        {
          text: "It contains ALU, CU, and registers",
          correct: true,
        },
        {
          text: "It has an internal memory",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The definition of the function abort() is in which header file ?",
      answers: [
        {
          text: "stdio..h",
          correct: false,
        },
        {
          text: "stdlib.h",
          correct: true,
        },
        {
          text: "conio.h",
          correct: false,
        },
        {
          text: "math.h",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the binary number of 15 ?",
      answers: [
        {
          text: "1111",
          correct: true,
        },
        {
          text: "1101",
          correct: false,
        },
        {
          text: "1011",
          correct: false,
        },
        {
          text: "1110",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which of the following is python library or module ?",
      answers: [
        {
          text: "React.js",
          correct: false,
        },
        {
          text: "ELKI",
          correct: false,
        },
        {
          text: "Weka",
          correct: false,
        },
        {
          text: "Wget",
          correct: true,
        },
      ],
    },
  ];
  
  const prizeMoney = [
    { id: 1, amount: "₹ 1,000" },
    { id: 2, amount: "₹ 2,000" },
    { id: 3, amount: "₹ 3,000" },
    { id: 4, amount: "₹ 5,000" },
    { id: 5, amount: "₹ 10,000" },
    { id: 6, amount: "₹ 20,000" },
    { id: 7, amount: "₹ 40,000" },
    { id: 8, amount: "₹ 80,000" },
    { id: 9, amount: "₹ 1,60,000" },
    { id: 10, amount: "₹ 3,20,000" },
    { id: 11, amount: "₹ 6,40,000" },
    { id: 12, amount: "₹ 12,50,000" },
    { id: 13, amount: "₹ 25,00,000" },
    { id: 14, amount: "₹ 50,00,000" },
    { id: 15, amount: "₹ 1,00,00,000" },
  ].reverse();
  
  export { prizeMoney, data };