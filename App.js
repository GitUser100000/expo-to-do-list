import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  };

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => 
      [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
      endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
    <StatusBar style='dark'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#a065ec'} onPress={startAddGoalHandler}/>
      { modalIsVisible && 
        <GoalInput 
        onAddGoal={addGoalHandler} 
        modalIsVisible={modalIsVisible} 
        onCancel={endAddGoalHandler}
        /> 
      }
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
            );
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: '#c5b6d6',
  },
  goalsContainer: {
    flex: 7,
  },
});
