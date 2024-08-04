import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteGoalHandler }) {
  function deleteGoalHandler() {
    onDeleteGoalHandler(itemData.item.key);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "blue" : styles.goalItem.backgroundColor,
          },
        ]}
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#145490",
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  goalText: {
    color: "#eee",
    padding: 8,
  },
});
