interface Answer {
  answer: string
  isCorrect: boolean
}

interface Quiz {
  title: string
  url: string
  questions: string
  possibleAnswers: Answer[]
}

export { Quiz, Answer };
