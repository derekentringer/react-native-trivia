//@flow
import React, { Component, useGlobal } from "reactn"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Colors from "../../resources/Colors"
import Strings from "../../resources/Strings"
import AnswerButton from "./components/AnswerButton"
import TriviaButton from "../../components/TriviaButton"

export default class QuizScreen extends Component<*, *> {
  
  goToResultsScreen = () => {
    const { navigate } = this.props.navigation
    navigate("ResultsScreen")
  }

  render() {
    if (this.global.questionCount + 1 <= this.global.questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.category}>{this.global.questions[this.global.questionCount].category}</Text>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{this.global.questions[this.global.questionCount].question}</Text>
          </View>
          <Text style={styles.questionCount}>{this.global.questionCount + 1}{Strings.quiz_screen.of}{this.global.questions.length}</Text>
          <View style={styles.buttonContainer}>
            <AnswerButton 
              userAnswer={"True"} 
              currentQuestion={this.global.questionCount}
              correctAnswer={this.global.questions[this.global.questionCount].correct_answer} 
              title={Strings.quiz_screen.button_true}/>
            <AnswerButton 
              userAnswer={"False"} 
              currentQuestion={this.global.questionCount}
              correctAnswer={this.global.questions[this.global.questionCount].correct_answer} 
              title={Strings.quiz_screen.button_false}/>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TriviaButton onPress={this.goToResultsScreen} content={Strings.quiz_screen.button_complete}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.dark_grey,
    padding: 30
  },
  category: {
    color: Colors.black,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: Colors.black
  },
  question: {
    color: Colors.black,
    fontSize: 26,
    textAlign: "center",
    padding: 40
  },
  questionCount: {
    fontSize: 18,
    color: Colors.black
  },
  buttonContainer: {
    flexDirection: "row"
  }
})