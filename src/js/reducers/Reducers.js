//@flow
export const incrementCountReducer = (global: any, dispatch: any, action: any) => ({
  questionCount: global.questionCount + action.amount
})

export const storeAnswer = (global: any, dispatch: any, action: any) => ({
  questionsCorrect: global.questionsCorrect.concat(action.isAnswerCorrect)
})