import React, { useGlobal, useDispatch } from "reactn"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { incrementCountReducer, storeAnswer } from "../../../reducers/Reducers"
import Colors from "../../../resources/Colors"
import Strings from "../../../resources/Strings"

const AnswerButton = (props: Props) => {
  const increment = useDispatch(incrementCountReducer)
  const answer = useDispatch(storeAnswer)

  recordAnswer = (question, userAnswer) => {
    answer({currentQuestion: question, isAnswerCorrect: props.correctAnswer === props.userAnswer})
    increment({amount: 1})
  }

  return (
    <View>
      <TouchableOpacity onPress={() => recordAnswer(props.currentQuestion, props.userAnswer)}>
        <Text style={styles.button}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.black,
    borderColor: Colors.black,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 5
  }
})

export default AnswerButton