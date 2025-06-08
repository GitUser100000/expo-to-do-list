import { StyleSheet, View, Text, Pressable } from 'react-native'


function GoalItem({ text, onDeleteItem, id }) {
    return (
            <View style={styles.goalItem}>
                <Pressable 
                    onPress={() => onDeleteItem(id)}
                    android_ripple={{colour: '#210644'}}
                    style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Text style={styles.goalText}>{text}</Text>
                </Pressable>
            </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        alignItems: 'center'
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});