const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
{
    question: 'Which of the following best describes bacterial growth during the log phase of the growth curve?',
    answers: [
      { text: 'A. Linear', correct: false },
      { text: 'B. Stationary', correct: false },
      { text: 'C. Exponential', correct: true },
      { text: 'D. S-shaped', correct: false }
    ]
  },
  {
    question: 'An inoculated thioglycolate medium cultures tube is clear throughout the tube except for dense growth at the bottom of the tube. What is your conclusion?',
    answers: [
      { text: 'A. The organisms are obligate anaerobes.', correct: true },
      { text: 'B. The organisms are facultative anaerobes.', correct: false },
      { text: 'C. The organisms are aerotolerant.', correct: false },
      { text: 'D. The organisms are obligate aerobes.', correct: false }
    ]
  },
  {
    question: 'Bacteria that grow in mine drainage at pH 1-2 are most likely which of the following?',
    answers: [
      { text: 'A. Alkaliphiles', correct: false },
      { text: 'B. Obligate anaerobes', correct: false },
      { text: 'C. Neutrophiles', correct: false },
      { text: 'D. Acidophiles', correct: true }
    ]
  },
  {
    question: 'Which of the following is the correct order of phases of growth in the growth curve of a batch of culture?',
    answers: [
      { text: 'A. Death/decline > lag > log > stationary', correct: false },
      { text: 'B. Lag > log > stationary > death/decline', correct: true },
      { text: 'C. Log > lag > stationary > death/decline', correct: false },
      { text: 'D. Stationary > log > lag > death/decline', correct: false }
    ]
  },
  {
    question: 'Which of these describes organisms that only use a small amount of oxygen?',
    answers: [
      { text: 'A. Facultative anaerobes', correct: false },
      { text: 'B. Obligate anaerobes', correct: false },
      { text: 'C. Aerotolerant anaerobes', correct: false },
      { text: 'D. Microaerophiles', correct: true }
    ]
  },
  {
    question: 'What is the best definition of generation time in a bacterium?',
    answers: [
      { text: 'A. Length of time it takes for a population of cells to double', correct: true },
      { text: 'B. Length of time it takes to reach the log phase', correct: false },
      { text: 'C. The time is takes to reach stationary phase', correct: false },
      { text: 'D. The length of time of the exponential phase', correct: false }
    ]
  },
  {
    question: 'If a culture starts with 50 cells, how many cells will be present after 5 generations with no cell death?',
    answers: [
      { text: 'A. 200', correct: false },
      { text: 'B. 1600', correct: true },
      { text: 'C. 400', correct: false },
      { text: 'D. 3200', correct: false }
    ]
  },
  {
    question: 'This indirect method of estimating the growth of a culture measures ________ by using a spectrophotometer.',
    answers: [
      { text: 'A. Opaqueness', correct: false },
      { text: 'B. Live cells', correct: false },
      { text: 'C. Dead cells', correct: false },
      { text: 'D. Turbidity', correct: true }
    ]
  },
  {
    question: 'This is the process used to prepare a bacterial sample for plate counting.',
    answers: [
      { text: 'A. Serial dilution', correct: true },
      { text: 'B. Most probable number method', correct: false },
      { text: 'C. Coulter counter', correct: false },
      { text: 'D. Fluorescence staining', correct: false }
    ]
  },
  {
    question: 'Bacteria isolated from a hot tub at 60°C are probably which of the following?',
    answers: [
      { text: 'A. Psychrophiles', correct: false },
      { text: 'B. Thermophiles', correct: true },
      { text: 'C. Mesophiles', correct: false },
      { text: 'D. Hyperthermophiles', correct: false }
    ]
  },
  {
    question: 'Which of the following types of medical items requires sterilization?',
    answers: [
      { text: 'A. Blood pressure cuffs', correct: false },
      { text: 'B. Respiratory masks', correct: false },
      { text: 'C. Bed linens', correct: false },
      { text: 'D. Needles', correct: true }
    ]
  },
  {
    question: 'Which of the following is suitable for use on living tissues for microbial control to prevent infection?',
    answers: [
      { text: 'A. Antiseptic', correct: true },
      { text: 'B. Disinfectant', correct: false },
      { text: 'C. Sterilant', correct: false },
      { text: 'D. Water', correct: false }
    ]
  },
  {
    question: 'The decimal reduction time refers to the amount of time it takes to which of the following?',
    answers: [
      { text: 'A. Reduce microbial population by 10%', correct: false },
      { text: 'B. Reduce microbial population by 90%', correct: true },
      { text: 'C. Reduce microbial population by 0.1%', correct: false },
      { text: 'D. Completely eliminate a microbial population', correct: false }
    ]
  },
  {
    question: 'Sanitization leaves objects free of microbes.',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    question: 'The complete removal or killing of all vegetative cells, endospores, and viruses from the targeted item or environment is known as:',
    answers: [
      { text: 'A. Sterilization', correct: true },
      { text: 'B. Sanitization', correct: false },
      { text: 'C. Disinfection', correct: false },
      { text: 'D. Degerming', correct: false }
    ]
  },
  {
    question: 'An example of degerming would be:',
    answers: [
      { text: 'A. Preparing surgical equipment and needles for injection', correct: false },
      { text: 'B. Handwashing', correct: true },
      { text: 'C. Commercial dishwashing', correct: false },
      { text: 'D. Cleaning skin before surgery', correct: false }
    ]
  },
  {
    question: 'Boiling may be ineffective when it comes to:',
    answers: [
      { text: 'A. Fomites', correct: false },
      { text: 'B. Gram Negative Organisms', correct: false },
      { text: 'C. Viruses', correct: false },
      { text: 'D. Endospores', correct: true }
    ]
  },
  {
    question: 'A scientist discovers that a bacterium she has been studying produces an antimicrobial that kills gram-negative bacteria. She isolates the antimicrobial compound, then chemically converts a chemical side chain to a hydroxyl group. When she tests the antimicrobial properties of this new version, she finds that this antimicrobial drug can now also kill gram-positive bacteria. The new antimicrobial drug with broad-spectrum activity is considered to be which of the following?',
    answers: [
      { text: 'A. Semisynthetic', correct: true },
      { text: 'B. Natural', correct: false },
      { text: 'C. Resistant', correct: false },
      { text: 'D. Synthetic', correct: false }
    ]
  },
  {
    question: 'Which of the following combinations would most likely contribute to the development of a Superinfection?',
    answers: [
      { text: 'A. long-term use of Narrow-spectrum Antimicrobials', correct: false },
      { text: 'B. short-term use of Narrow-spectrum Antimicrobials', correct: false },
      { text: 'C. long-term use of broad-spectrum antimicrobials', correct: true },
      { text: 'D. short-term use of broad-spectrum antimicrobials', correct: false }
    ]
  },
  // bad algo under strings below :(
  {
    question: 'Which of the following routes of administration would be appropriate and convenient for home administration of an antimicrobial to treat a systemic infection?',
    answers: [
      { text: 'A. Topical', correct: false },
      { text: 'B. Parenteral', correct: false },
      { text: 'C. Oral', correct: true },
      { text: 'D. Intravenous', correct: false }
    ]
  },
  {
    question: 'Which clinical situation would be appropriate for treatment with a narrow-spectrum antimicrobial drug?',
    answers: [
      { text: 'A. Treatment of a polymicrobial mixed infection in the intestine', correct: false },
      { text: 'B. Treatment of strep throat caused by culture identified S. pyogenes', correct: true },
      { text: 'C. Prophylaxis against infection after a surgical procedure', correct: false },
      { text: 'D. Empiric therapy of pneumonia while waiting for culture results', correct: false }
    ]
  },
  {
    question: 'Which of the following terms refers to the ability of an antimicrobial drug to harm the target microbe without harming the host?',
    answers: [
      { text: 'A. Mode of action', correct: false },
      { text: 'B. Therapeutic level', correct: false },
      { text: 'C. Spectrum of activity', correct: false },
      { text: 'D. Selective toxicity', correct: true }
    ]
  },
  {
    question: 'Which of the following is not a type of β-lactam antimicrobial?',
    answers: [
      { text: 'A. Monobactams', correct: false },
      { text: 'B. Penicillins', correct: false },
      { text: 'C. Cephalosporins', correct: false },
      { text: 'D. Glycopeptides', correct: true }
    ]
  },
  {
    question: 'Which of the following does not bind to the 50S ribosomal subunit?',
    answers: [
      { text: 'A. Tetracyclines', correct: false },
      { text: 'B. Chloramphenicol', correct: true },
      { text: 'C. Macrolides', correct: false },
      { text: 'D. Lincosamides', correct: false }
    ]
  },
  {
    question: 'What are the temperature and time requirements for high-temperature short-time antibiotics?',
    answers: [
      { text: 'A. 138 degrees Celsuis for 2 or more minutes', correct: false },
      { text: 'B. 72 degrees Celsius for 15 min', correct: false },
      { text: 'C. 138 degrees for 2 or more seconds', correct: false },
      { text: 'D. 72 degrees Celsius for 15 seconds', correct: true }
    ]
  },
  {
    question: 'What defense do bacteria have against beta-lactam drugs?',
    answers: [
      { text: 'A. Beta-Lactamase', correct: true },
      { text: 'B. Transpeptidase', correct: false },
      { text: 'C. Penicillinase', correct: false },
      { text: 'D. Reverse transcriptase', correct: false }
    ]
  },
  {
    question: 'Which of these drugs inhibits the biosynthesis of ergosterols?',
    answers: [
      { text: 'A. Tetracycline', correct: false },
      { text: 'B. Chloramphenicol', correct: false },
      { text: 'C. Imidazoles', correct: true },
      { text: 'D. Cephalosporin', correct: false }
    ]
  },
  {
    question: 'A microbiology student flames her inoculation loop in the lab. This is an example of:',
    answers: [
      { text: 'A. Degerming', correct: false },
      { text: 'B. Sanitization', correct: false },
      { text: 'C. Desiccation', correct: false },
      { text: 'D. Dry heat sterilization', correct: true }
    ]
  },
  {
    question: 'This compound was developed by Joseph Lister to control microbial growth.',
    answers: [
      { text: 'A. Triclosan', correct: false },
      { text: 'B. Phenol', correct: true },
      { text: 'C. Monochloramine', correct: false },
      { text: 'D. Betadine', correct: false }
    ]
  },
  {
    question: 'Which filter can filter microbes that are greater than 0.3 um in size?',
    answers: [
      { text: 'A. HEPA filter', correct: true },
      { text: 'B. Membrane filter', correct: false },
      { text: 'C. Micro filter', correct: false },
      { text: 'D. Culture filter', correct: false }
    ]
  },
  {
    question: 'Antacids can negatively impact the effect of an antimicrobial. This is an example of:',
    answers: [
      { text: 'A. Antagonism', correct: true },
      { text: 'B. Optimum Dosage', correct: false },
      { text: 'C. Synergism', correct: false },
      { text: 'D. Narrow spectrum drugs', correct: false }
    ]
  },
  {
    question: 'Penicillin and other drugs in its class are known for their:',
    answers: [
      { text: 'A. Penicillinase', correct: false },
      { text: 'B. Beta-lactamase', correct: false },
      { text: 'C. Side Chains', correct: false },
      { text: 'D. Beta-lactam ring', correct: true }
    ]
  },
  {
    question: 'Which of the following drugs inhibits bacterial RNA synthesis?',
    answers: [
      { text: 'A. Nalidixic acid', correct: false },
      { text: 'B. Polymyxin B', correct: false },
      { text: 'C. Ciprofloxacin', correct: false },
      { text: 'D. Rifamycin', correct: true }
    ]
  },
  {
    question: 'Which of the following is not an antifungal drug?',
    answers: [
      { text: 'A. Nikkomycin', correct: false },
      { text: 'B. Echinocandin', correct: false },
      { text: 'C. Acyclovir', correct: true },
      { text: 'D. Imidazoles', correct: false }
    ]
  },
  {
    question: 'Which of the following drugs could be used to fight an infection with HIV?',
    answers: [
      { text: 'A. Vancomycin', correct: false },
      { text: 'B. Artemisinin', correct: false },
      { text: 'C. ART', correct: true },
      { text: 'D. Zanamivir', correct: false }
    ]
  },{
    question: 'If you are given 9 cells to begin with and allow them to divide 4 times. How many cells have been created?',
    answers: [
      { text: 'A. 256', correct: false },
      { text: 'B. 2,048', correct: false },
      { text: 'C. 144', correct: false },
      { text: 'D. 72', correct: true }
    ]
  },
  {
    question: 'In a bacterial sample, what is considered a statistically valid number of colonies.',
    answers: [
      { text: 'A. 3-30', correct: false },
      { text: 'B. 50-100', correct: false },
      { text: 'C. 100-500', correct: false },
      { text: 'D. 30-300', correct: true }
    ]
  },
  {
    question: 'Which is the most favorable pH for the growth of an organism',
    answers: [
      { text: 'A. optimum growth pH', correct: true },
      { text: 'B. minimum growth pH', correct: false },
      { text: 'C. maximum growth pH', correct: false },
      { text: 'D. narrow growth pH', correct: false }
    ]
  },
  {
    question: 'Which produces the highest drug concentrations in the body?',
    answers: [
      { text: 'A. Intravenous', correct: true },
      { text: 'B. Topical', correct: false },
      { text: 'C. Orally', correct: false },
      { text: 'D. Intramuscular', correct: false }
    ]
  },
  {
    question: 'Discussion: Describe the difference between anabolism and catabolism.',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What happens to an enzyme if the temperature or pH are too high? Hint: what’s happening to the protein albumin when you make scrambled eggs?',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: There are important derivatives of B vitamins that are used in cellular metabolism. List them and what they are a derivative of specifically.',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What is the process that generates ATP? Explain why it is so important.',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: Describe the characteristics of a catalyst that works in a biological setting',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What are the components of an enzyme? Draw a picture with the binding sites',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What is the difference between competitive inhibitors and noncompetitive inhibitors? Draw pictures of both. Challenge: Why is this important in your body?',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: Explain the process and list the products of glycolysis, Kreb’s Cycle, and electron transport chain',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What is the significance of substrate level phosphorylation? ',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: Explain the difference between aerobic and anaerobic respiration',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: Explain the two types of fermentation',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
  {
    question: 'Discussion: What are the factors that affect enzyme activity?',
    answers: [
      { text: 'Next', correct: true }
    ]
  },
]
