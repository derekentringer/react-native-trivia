//@flow
import React, { Component, useGlobal, setGlobal } from "reactn"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform, FlatList } from "react-native"
import { Questions } from "../../api/Questions"
import Constants from "../../api/Constants"
import Colors from "../../resources/Colors"
import Strings from "../../resources/Strings"

export default class ResultsScreen extends Component<*, *> {
  resetGame = () => {
    this.setGlobal({
      questions: [],
      questionsCorrect: [],
      questionCount: 0,
      questionAmount: 10,
      questionsDifficulty: "hard",
      questionsType: "boolean"
    })
    this.setGlobal(
      Questions.get(
        Constants.baseUrl, 
        {
          amount: this.global.questionAmount, 
          difficulty: this.global.questionsDifficulty, 
          questionsType: this.global.questionsType
        }
      ).then(response => ({ questions: response.results }))
    )
  }
  
  playAgain = () => {
    this.resetGame()
    const { navigate } = this.props.navigation
    navigate("HomeScreen")
  }

  countCorrectAnswers = (array: Array<boolean>) => {
    var count = 0;
    for(var i=0; i < array.length; i++) {
      if(array[i] == true) {
        count++
      }
    }
    return count
  }

  calculatePercentageCorrect = () => {
    return this.countCorrectAnswers(this.global.questionsCorrect) / this.global.questions.length * 100
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{Strings.results_screen.heading}</Text>
        <Text style={styles.subHeader}>{this.calculatePercentageCorrect()}{Strings.results_screen.percent_sign}</Text>
        <Text style={styles.subHeader}>{this.countCorrectAnswers(this.global.questionsCorrect)}{Strings.results_screen.forward_slash}{this.global.questions.length}</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.global.questions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.answerContainer}>
                <Text style={styles.questionLeft}>{this.global.questionsCorrect[index] === true ? "+" : "-"}</Text>
                <Text style={styles.question}>{this.global.questions[index].question}</Text>
              </View>
            )}
          />
        </ScrollView>
        <TouchableOpacity onPress={this.playAgain}>
          <Text style={styles.button}>{Strings.results_screen.button_playagain}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.dark_grey,
    paddingTop: Platform.OS === "ios" ? 60 : 30
  },
  header: {
    color: Colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: "center"
  },
  subHeader: {
    color: Colors.black,
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  questionCount: {
    fontSize: 18,
    color: Colors.black
  },
  scrollView: {
    marginTop: 20,
    marginBottom: 20
  },
  answerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 20,
    paddingLeft: 20
  },
  questionLeft: {
    color: Colors.black,
    fontSize: 32,
    marginTop: 10,
    marginRight: 20
  },
  question: {
    color: Colors.black,
    fontSize: 26,
    marginTop: 10,
    marginRight: 30
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.black,
    borderColor: Colors.black,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 30
  }
})