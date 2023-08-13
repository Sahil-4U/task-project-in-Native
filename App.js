import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  }
  return (
    <View style={!showModal && styles.con}>



      <Modal
        animationType='slide'
        visible={showModal}
      >
        <View>
          <Task />
        </View>
      </Modal>
      <View style={styles.textView}>
        <Text>Want to write some todo--</Text>
        <Button
          title='todo'
          onPress={handleModal}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
  },
  textView: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },

})


