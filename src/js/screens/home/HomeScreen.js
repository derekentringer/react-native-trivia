//@flow
import React, { Component, useGlobal } from "reactn"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Questions } from "../../api/Questions"
import Constants from "../../api/Constants"
import Colors from "../../resources/Colors"
import Strings from "../../resources/Strings"
import TriviaButton from "../../components/TriviaButton"

export default class HomeScreen extends Component<*, *> {

  componentDidMount() {
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

  beginChallenge = () => {
    const { navigate } = this.props.navigation
    navigate("QuizScreen")
  }

  render() {
    var subtitle = Strings.welcome_screen.text1.replace("#{questions}", this.global.questions.length)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{Strings.welcome_screen.heading}</Text>
        <Text style={styles.subHeader}>{subtitle}</Text>
        <Text style={styles.subHeader}>{Strings.welcome_screen.text2}</Text>
        <TriviaButton onPress={this.beginChallenge} content={Strings.welcome_screen.button_begin}/>
      </View>
    )
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
  header: {
    color: Colors.black,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  subHeader: {
    color: Colors.black,
    fontSize: 26,
    textAlign: "center"
  }
})