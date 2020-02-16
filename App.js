//@flow
import React, { setGlobal } from "reactn"
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from "./src/js/screens/home/HomeScreen"
import QuizScreen from "./src/js/screens/quiz/QuizScreen"
import ResultsScreen from "./src/js/screens/results/ResultsScreen"

setGlobal({
  questions: [],
  questionsCorrect: [],
  questionCount: 0,
  questionAmount: 10,
  questionsDifficulty: "hard",
  questionsType: "boolean"
})

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: {
      header: null
    }
  },
  ResultsScreen: {
    screen: ResultsScreen,
    navigationOptions: {
      header: null
    }
  }
})

const App = createAppContainer(MainNavigator)

export default App