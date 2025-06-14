import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput({ onAddGoal, modalIsVisible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your course goal" 
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                  <View><Button title='Cancel' onPress={onCancel} color="#f31282"/></View>
                  <View><Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/></View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#563d99',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },    
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});