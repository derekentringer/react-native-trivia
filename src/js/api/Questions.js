//@flow
const checkResponseStatus = response => {
  if (response.ok) {
    console.log(response)
    return response
  } else {
    const error = new Error(response.statusText)
    throw error
  }
}

const Questions = {
  get: (path: string, params: any) =>
    fetch(path + "amount=" + params.amount + "&difficulty=" + params.difficulty + "&type=" + params.questionsType, params)
      .then(checkResponseStatus)
      .then(response => response.json())
}

export { Questions }