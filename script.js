const questionDisplay = document.querySelector("#questions")
const answerDisplay = document.querySelector("#answer")

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: "New York",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        alt: "Photo of the Empire State building during sunset",
        credit: "Michael Discenza"
      },
      {
        text: "Austin",
        image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
        alt: "Austin Skyline",
        credit: "Carlos Alfonso"
      },
      {
        text: "Portland",
        image: "https://images.unsplash.com/photo-1541457523724-95f54f7740cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "High-rise Buildings",
        credit: "Elena Kuchko"
      },
      {
        text: "New Orleans",
        image: "https://images.unsplash.com/photo-1616463539061-adcd0d7664de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "People walking on the street",
        credit: "Harold Wainwright"
      },
    ]
  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        alt: "Arugula and burratta pizza",
        credit: "Saundarya Srinivasan"
      },
      {
        text: "Sandwich",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Caprese Sandwich",
        credit: "Raphael Nogueira"
      },
      {
        text: "Pasta",
        image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Pasta with herbs",
        credit: "Nicholas Grande"
      },
      {
        text: "Hamburger",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Burger with fries",
        credit: "Jonathan Borba"
      },
    ]
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "Traditional",
        image: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        alt: "Classic Lisbon House",
        credit: "Hugo Sousa"
      },
      {
        text: "Modern",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "A clean example of contemporary living",
        credit: "Avi Werde"
      },
      {
        text: "House",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "A small house in yellow springs USA",
        credit: "Phil Hearing"
      },
      {
        text: "Mountains",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "House in the mountains",
        credit: "Ian Keefe"
      }
    ]
  }
]

const answers = [
  {
    combination: ["New  York", "Pizza", "Traditional"],
    text: "Blue Cheese",
    image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Blue Cheese"
  },
  {
    combination: ["Austin", "Pasta", "Modern"],
    text: "Cheddar",
    image: "https://images.unsplash.com/photo-1625085576040-898520ce9e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Cheddar"
  },
  {
    combination: ["Portland", "Sandwich", "Mountains"],
    text: "Feta",
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80",
    alt: "Feta"
  },
  {
    combination: ["New  Orleans", "Hamburger", "House"],
    text: "Mozzarella",
    image: "https://images.unsplash.com/photo-1633253037246-12bb11ff545a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Mozzarella"
  },
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
  questions.forEach(question => {
    const titleBlock = document.createElement('div')
    titleBlock.id = question.id
    titleBlock.classList.add('title-block')
    const titleHeading = document.createElement('h2')
    titleHeading.textContent = question.text
    titleBlock.append(titleHeading)
    questionDisplay.append(titleBlock)

    const answersBlock = document.createElement('div')
    answersBlock.id = question.id + '-questions'
    answersBlock.classList.add('answer-options')

    unansweredQuestions.push(question.id)

    question.answers.forEach(answer => {
      const answerBlock = document.createElement('div')
      answerBlock.classList.add('answer-block')
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
      const answerImage = document.createElement('img')
      answerImage.setAttribute('src', answer.image)
      answerImage.setAttribute('alt', answer.alt)

      const answerTitle = document.createElement('h3')
      answerTitle.textContent = answer.text

      const answerInfo = document.createElement('p')
      const imageLink = document.createElement('a')
      imageLink.setAttribute('alt', answer.credit)
      imageLink.textContent = answer.credit
      const sourceLink = document.createElement('a')
      sourceLink.textContent = 'Unsplash'
      sourceLink.setAttribute('href', 'https://www.unsplash.com')
      answerInfo.append(imageLink, ' to ', sourceLink)

      answerBlock.append(answerImage, answerTitle, answerInfo)

      answersBlock.append(answerBlock)
    })

    questionDisplay.append(answersBlock)
  })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
  chosenAnswers.push(chosenAnswer)
  const itemToRemove = unansweredQuestions.indexOf(questionId)

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1)
  }
  console.log(chosenAnswers)
  console.log(unansweredQuestions) 

  disableQuestionBlock(questionId, chosenAnswer)
  const lowestQuestionId = Math.min(...unansweredQuestions)
  location.href = '#' + lowestQuestionId

  if (!unansweredQuestions.length) {
    showAnswer()
  }
}

const showAnswer = () => {
  let result
  answers.forEach(answer => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer
    } else if (!result) {
      result = answers[0]
    }
  })

  const answerBlock = document.createElement('div')
  answerBlock.classList.add('result-block')
  const answerTitle = document.createElement('h3')
  answerTitle.textContent = result.text
  const answerImage = document.createElement('img')
  answerImage.setAttribute('src', result.image)
  answerImage.setAttribute('alt', result.alt)

  answerBlock.append(answerTitle, answerImage)
  answerDisplay.append(answerBlock)

  const allAnswerBlocks = document.querySelectorAll('.answer-block')
  Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(questionId + "-questions")

  Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText!== chosenAnswer) {
      block.style.opacity ="50%"
    }
  })
}