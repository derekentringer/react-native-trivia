import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Colors from "../resources/Colors"

const TriviaButton = (props: Props) => {

    return (
    <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.button}>{props.content}</Text>
    </TouchableOpacity>
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
    paddingBottom: 20
  }
})

export default TriviaButton