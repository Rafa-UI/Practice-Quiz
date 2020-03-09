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
    question: 'What is metabolism?',
    answers: [
      { text: 'A. The buildup and breakdown of nutrients within a cell.', correct: true },
      { text: 'B. When the body engages in Homeostasis', correct: false },
      { text: 'C. When the body stores energy in Fat Cells', correct: false },
      { text: 'D. When your body needs to synthesize', correct: false }
    ]
  },
  {
    question: 'Anabolic pathways ___________________?',
    answers: [
      { text: 'A. Require energy to synthesize ', correct: true },
      { text: 'B. Require energy to desynthesize', correct: false },
      { text: "C. Require's NADPH ", correct: true },
      { text: 'D. Requires NAD+', correct: false }
    ]
  },
  {
    question: 'What is required for maintaining the cells energy balance?',
    answers: [
      { text: 'A. Catabolism and Metabolism', correct: false },
      { text: 'B. Metabolism and Macrolism', correct: false },
      { text: 'C. Catalysis', correct: false },
      { text: 'D. Catabolism and Anabolism', correct: true }
    ]
  },
  {
    question: 'What is required for maintaining the cells energy balance?',
    answers: [
      { text: 'Cells require sugar for energy balance', correct: false },
      { text: 'Cells require high energy unstable bonds', correct: true }
    ]
  },
  {
    question: 'What is the breaking down of complex molecules?',
    answers: [
      { text: 'A. Catalysts', correct: false },
      { text: 'B. Oxidative Phosphorylation', correct: false },
      { text: 'C. Catabolism', correct: true },
      { text: 'D. Feedback Inhibition', correct: false },
    ]
  },
  {
    question: 'What is the process that generates ATP?',
    answers: [
      { text: 'A. Glycolysis', correct: false },
      { text: 'B. Fermentation', correct: false },
      { text: 'C. Oxidative Phosphorylation', correct: true },
      { text: 'D. Metabolism', correct: false },
    ]
  },
  {
    question: 'ATP has low energy stable bonds.',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    question: 'A high energy bond can readily be broken to release usable energy.',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ]
  },
  {
    question: 'Important Info: Pasteur couldn’t find the agent that causes rabies and speculated about the existence of pathogens too small to be detected by microscopy',
    answers: [
      { text: 'NEXT', correct: true },
    ]
  },
  {
    question: ' Important Info: In 1884, Charles Chamberland invented a filter with pores smaller than bacteria allowing their removal from contaminated solution. *Ivanosky is the original founder or discoverer of the virus',
    answers: [
      { text: 'NEXT', correct: true },
    ]
  },
  {
    question: 'What are some characteristics of viruses?',
    answers: [
      { text: 'A. Infections acellular pathogens', correct: false },
      { text: 'B. Obligate Intrcellular parasites with host and cell type specificity', correct: false },
      { text: 'C. DNA or RNA genome', correct: false },
      { text: 'D. Metabolism', correct: true },
    ]
  },
  {
    question: 'Most viruses infect ________ type of cells in a host?',
    answers: [
      { text: 'Specific types', correct: true },
      { text: 'Only cells with a cell wall', correct: false },
      { text: 'All Types', correct: false },
      { text: 'Non-Specific types', correct: false },
    ]
  },
  {
    question: 'Martinez Beijernick concluded that the pathogen was different from bacteria and could replicate and multiply in living plants and called it contagiumvivum fluidum(soluble living germ)',
    answers: [
      { text: 'NEXT', correct: true },
    ]
  },
  {
    question: 'What type of characteristic does a virus have?',
    answers: [
      { text: 'DNA', correct: false },
      { text: 'DNA or RNA (never both)', correct: true },
      { text: 'RNA', correct: false },
      { text: 'DRNA', correct: false },
    ]
  },
  // Add new data for the strings below--->
  {
    question: 'This person was the first to develop a lens powerful enough to view microbes. He described these microbes as “animalcules.',
    answers: [
      { text: 'A. Robert Koch', correct: false },
      { text: 'B. Robert Hooke', correct: false },
      { text: 'C. Francesco Redi', correct: false },
      { text: 'D. Antonie Van Leeuwenhoek ', correct: true },
    ]
  },
  {
    question: 'Fragmentation of septate hyphae results in the formation of:',
    answers: [
      { text: 'A. Arthroconidia', correct: true },
      { text: 'B. Chlamydoconidia', correct: false },
      { text: 'C. Conidiospore', correct: false },
      { text: 'D. Sporangiospore', correct: false },
    ]
  },
  {
    question: 'Cells of prokaryotic organisms lack:',
    answers: [
      { text: 'A. Cell membrane', correct: false },
      { text: 'B. Nucleus', correct: true },
      { text: 'C. Cell wall', correct: false },
      { text: 'D. Mitochondria', correct: false },
    ]
  },
  {
    question: 'Which of the following scientists experimented with raw meat,maggots, and flies in an attempt to disprove the theory of spontaneous generation?',
    answers: [
      { text: 'A. Aristotle', correct: false },
      { text: 'B. Francesco Redi', correct: true },
      { text: 'C. Lazzaro Spallanzani', correct: false },
      { text: 'D. Van Leeuwenhoek', correct: true },
    ]
  },
  {
    question: 'What is another name for flukes?',
    answers: [
      { text: 'A. Cestodes', correct: false },
      { text: 'B. Roundworms', correct: false },
      { text: 'C. Trematodes', correct: true },
      { text: 'D. Nematodes', correct: false },
    ]
  },
  {
    question: 'Dark objects are visible against a bright background.',
    answers: [
      { text: 'A. Brightfield microscope', correct: true },
      { text: 'B. Darkfield microscope', correct: false },
      { text: 'C. Electron microscope', correct: false },
      { text: 'D. Fluorescence microscope', correct: false },
    ]
  },
  {
    question: 'Histoplasma capsulatum is an example of a dimorphic fungi. What sentence best describes a dimorphic fungi?',
    answers: [
      { text: 'A. Nonfilamentous and unicellular', correct: false },
      { text: 'B. Yeastlike at 37’C and moldlike at 25’C', correct: true },
      { text: 'C. Moldlike at 37’C and yeastlike at 25’C', correct: false },
      { text: 'D. Reproduce asexually and sexually through the formation of spores', correct: false },
    ]
  },
  {
    question: 'What mordant is used in Gram staining?',
    answers: [
      { text: 'A. Crystal violet', correct: false },
      { text: 'B. Safranin', correct: false },
      { text: 'C. Gram’s Iodine', correct: true },
      { text: 'D. Acid-alcohol', correct: false },
    ]
  },
  {
    question: 'Helminths that have male and female reproductive systems in one animal are called:',
    answers: [
      { text: 'A. Complex', correct: false },
      { text: 'B. Monoecious', correct: true },
      { text: 'C. Dioecious', correct: false },
      { text: 'D. Both B & C', correct: false },
    ]
  },
  {
    question: 'A mass of hyphae is called a:',
    answers: [
      { text: 'A. Septate hyphae', correct: false },
      { text: 'B. Coenocytic hyphae', correct: false },
      { text: 'C. Mycelium', correct: true },
      { text: 'D. Thallus', correct: false },
    ]
  },
  {
    question: 'WE derive vitamin K from E.coli. Which symbiotic relationship is this in example of?',
    answers: [
      { text: 'A. Mutualism', correct: true },
      { text: 'B. Parasitism', correct: false },
      { text: 'C. Commensalism', correct: false },
      { text: 'D. Neutralism', correct: false },
    ]
  },
  {
    question: 'Which of the following terms refers to a bacterial cell having a single tuft of flagella at one end?',
    answers: [
      { text: 'A. Lophotrichous', correct: true },
      { text: 'B. Amphitrichous', correct: false },
      { text: 'C. Monotrichous', correct: false },
      { text: 'D. Peritrichous', correct: false },
    ]
  },
  {
    question: 'Which subgroup is the most diverse, largest, and includes a number of human pathogens?',
    answers: [
      { text: 'A. Epsilonproteobacteria', correct: false },
      { text: 'B. Gammaproteobacteria', correct: true },
      { text: 'C. Betaproteobacteria', correct: false },
      { text: 'D. Alphaproteobacteria', correct: false },
    ]
  },
  {
    question: 'In this type of solution, water is moving out of the cell causing crenation.',
    answers: [
      { text: 'A. Both B and C', correct: false },
      { text: 'B. Hypotonic', correct: false },
      { text: 'C. Isotonic', correct: false },
      { text: 'D. Hypertonic', correct: true },
    ]
  },
  {
    question: 'Unicellular fungi are called _________.',
    answers: [
      { text: 'A. Yeasts', correct: true },
      { text: 'B. Molds', correct: false },
      { text: 'C. Ascomycota', correct: false },
      { text: 'D. Zygomycota', correct: false },
    ]
  },
  {
    question: 'Classified as “plant-like” protists',
    answers: [
      { text: 'A. Plankton', correct: false },
      { text: 'B. Protozoans', correct: false },
      { text: 'C. Algae', correct: true },
      { text: 'D. Water molds', correct: false },
    ]
  },
  {
    question: 'These unicellular, eukaryotic parasites inhabit water and soil, have animal-like nutrition, contain complex life cycles that are free-living or parasitic are called:',
    answers: [
      { text: 'A. Proteobacteria', correct: false },
      { text: 'B. Helminths', correct: false },
      { text: 'C. Cytostome', correct: false },
      { text: 'D. Protozoa', correct: true },
    ]
  },
  {
    question: 'Hollow, cylindrical capsids best describes which type of viruses?',
    answers: [
      { text: 'A. Helical viruses', correct: true },
      { text: 'B. Polyhedral viruses', correct: false },
      { text: 'C. Complex viruses', correct: false },
      { text: 'D. Virion', correct: false },
    ]
  },
  {
    question: 'Which of the following do prokaryotic cells possess?',
    answers: [
      { text: 'A. Golgi apparatus', correct: false },
      { text: 'B. Nucleus', correct: false },
      { text: 'C. Ribosomes', correct: true },
      { text: 'D. Endoplasmic reticulum', correct: false },
    ]
  },
  {
    question: 'Which bacteria causes disease that is transmitted to humans, via animal bites and causes infections of the skin and deeper tissues?',
    answers: [
      { text: 'A. Pseudomonas', correct: false },
      { text: 'B. Pasteurella multocida', correct: true },
      { text: 'C.Haemophilus influenzae', correct: false },
      { text: 'D. Gammaproteobacteria', correct: false },
    ]
  },
  {
    question: 'What is incorporated within the binomial nomenclature?',
    answers: [
      { text: 'A. Genus and Species', correct: true },
      { text: 'B. Domain and Kingdom', correct: false },
      { text: 'C. Family and Genus', correct: false },
      { text: 'D. Order and Family', correct: false },
    ]
  },
  {
    question: 'Who is the father of Western Medicine?',
    answers: [
      { text: 'A. Thucydides', correct: false },
      { text: 'B. Marcus Varro', correct: false },
      { text: 'C. Francesco Redi', correct: false },
      { text: 'D. Hippocrates', correct: true },
    ]
  },
  {
    question: 'The plasma membrane of the protozoa is called:',
    answers: [
      { text: 'A. Pellicle', correct: false },
      { text: 'B. Plasmalemma', correct: true },
      { text: 'C. Cytoplasm', correct: false },
      { text: 'D. Ectoplasm', correct: false },
    ]
  },
  {
    question: 'Which statement is false?',
    answers: [
      { text: 'A. The three domains are Eukarya, Bacteria, and Archaea', correct: false },
      { text: 'B. Algae have cellulose cell walls', correct: false },
      { text: 'C. Eukaryotic microorganisms do not have a nucleus', correct: true },
      { text: 'D. Viruses are acellular', correct: false },
    ]
  },
  {
    question: 'What is it called when a wave bounces off of a material?',
    answers: [
      { text: 'A. Absorption', correct: false },
      { text: 'B. Reflection', correct: true },
      { text: 'C. Frequency', correct: false },
      { text: 'D. Refraction', correct: false },
    ]
  },
  {
    question: 'Microorganisms that are only temporarily found in or on the human body (pathogens) are called:',
    answers: [
      { text: 'A. Transient microbiota', correct: true },
      { text: 'B. Microbiome', correct: false },
      { text: 'C. Resident microbiota', correct: false },
      { text: 'D. Oligotrophs', correct: false },
    ]
  },
  {
    question: 'True or False: Live and/or unstained specimen have little contrast with the surrounding medium',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ]
  },
  {
    question: 'True or False: The lower the numerical aperture, the better the resolution',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    question: 'This organelle functions in packaging and sorting proteins.',
    answers: [
      { text: 'A. Nucleus', correct: false },
      { text: 'B. Golgi Apparatus', correct: true },
      { text: 'C. Rough ER', correct: false },
      { text: 'D. Lysosomes', correct: false },
    ]
  },
  {
    question: '“False feet” cytoplasmic extensions that attach to the cell surface used by protozoa for locomotion are named:',
    answers: [
      { text: 'A. Cilia', correct: false },
      { text: 'B. Flagella', correct: false },
      { text: 'C. Fornicata', correct: false },
      { text: 'D. Pseudopodia', correct: true },
    ]
  },
  {
    question: 'A cluster of cocci would be referred to as:',
    answers: [
      { text: 'A. Staphylococcus', correct: true },
      { text: 'B. Diplococcus', correct: false },
      { text: 'C. Streptococcus', correct: false },
      { text: 'D. Streptococcus', correct: false },
    ]
  },
  {
    question: 'These cell structures are not necessary for survival but may contain antibiotic resistance:',
    answers: [
      { text: 'A. Endospores', correct: false },
      { text: 'B. Plasmids', correct: true },
      { text: 'C. Ribosomes', correct: false },
      { text: 'D. Inclusions', correct: false },
    ]
  },
  {
    question: 'The symbiotic relationship that describes population A as being harmed and population B as being unaffected is:',
    answers: [
      { text: 'A. Mutualism', correct: false },
      { text: 'B. Parasitism', correct: false },
      { text: 'C. Amensalism', correct: true },
      { text: 'D. Commensalism', correct: false },
    ]
  },
  {
    question: 'This mode of transport does not require energy but requires a transporter protein:',
    answers: [
      { text: 'A. Simple diffusion', correct: false },
      { text: 'B. Facilitated diffusion', correct: true },
      { text: 'C. Active transport', correct: false },
      { text: 'D. Group translocation', correct: false },
    ]
  },
  {
    question: 'Which bacteria causes dysentery?',
    answers: [
      { text: 'A. Borrelia', correct: false },
      { text: 'B. Pseudomonas', correct: false },
      { text: 'C. E.coli', correct: false },
      { text: 'D. Shigella', correct: true },
    ]
  },
  {
    question: 'The order of life cycle in helminths is:',
    answers: [
      { text: 'A. Egg > larvae > trophozoite', correct: false },
      { text: 'B. Larvae > adult > egg', correct: false },
      { text: 'C. Adult > larvae > egg', correct: false },
      { text: 'D. Egg > larvae > adult', correct: true },
    ]
  },
  {
    question: 'All of the following belong to the endomembrane system except:',
    answers: [
      { text: 'A. Endoplasmic reticulum', correct: false },
      { text: 'B. Nucleus', correct: true },
      { text: 'C. Golgi apparatus', correct: false },
      { text: 'D. Lysosomes', correct: false },
    ]
  },
  {
    question: 'Where can protein synthesis occur in the cell?',
    answers: [
      { text: 'A. Nucleus', correct: false },
      { text: 'B. Smooth ER', correct: false },
      { text: 'C. Rough ER', correct: true },
      { text: 'D. Golgi Apparatus', correct: false },
    ]
  },{
    question: 'This organelle is the “powerhouse of the cell” and is involved in cellular respiration.',
    answers: [
      { text: 'A. Nucleus', correct: false },
      { text: 'B. Chloroplasts', correct: false },
      { text: 'C. Mitochondria', correct: true },
      { text: 'D. Golgi apparatus', correct: false },
    ]
  },{
    question: 'The plasma membrane is known as a _______. (Select all that apply)',
    answers: [
      { text: 'A. Phospholipid Bilayer', correct: true },
      { text: 'B. Fluid mosaic', correct: true },
      { text: 'C. Duo membrane', correct: false },
      { text: 'D. Cytoskeleton', correct: false },
    ]
  },{
    question: 'The term “selectively permeable” refers to the plasma membrane’s ability to:',
    answers: [
      { text: 'A. Change shape as needed', correct: false },
      { text: 'B. Absorb nutrients', correct: false },
      { text: 'C. Expel objects from the cell', correct: false },
      { text: 'D. Regulate what enters and leaves a cell', correct: true },
    ]
  },{
    question: 'Fungi cell walls are primarily made up of:',
    answers: [
      { text: 'A. Chitin', correct: true },
      { text: 'B. Peptidoglycan', correct: false },
      { text: 'C. Glucan', correct: false },
      { text: 'D. Cellulose', correct: false },
    ]
  },{
    question: 'This method of transport is unique to prokaryotes:',
    answers: [
      { text: 'A. Active transport', correct: false },
      { text: 'B. Facilitated diffusion', correct: false },
      { text: 'C. Group translocation', correct: true },
      { text: 'D. Passive transport', correct: false },
    ]
  },{
    question: 'When an arthropod carries a pathogen on the outside of its body and transmits it by physical contact, what type of transmission is it?',
    answers: [
      { text: 'A. Biological transmission', correct: false },
      { text: 'B. Mechanical transmission', correct: true },
      { text: 'C. Droplet transmission', correct: false },
      { text: 'D. Vertical transmission', correct: false },
    ]
  },{
    question: 'Staphylococcus epidermidis uses the dead cells of the human skin as nutrients. This is an example of:',
    answers: [
      { text: 'A. Neutralism', correct: false },
      { text: 'B. Parasitism', correct: false },
      { text: 'C. Commensalism', correct: true },
      { text: 'D. Amensalism', correct: false },
    ]
  },
]