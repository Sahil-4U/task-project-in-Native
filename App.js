import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={styles.btn} onPress={handleModal}>
          <Text style={styles.btnText}>todo</Text>
        </TouchableOpacity>
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
  btn: {
    width: 120,
    backgroundColor: 'blue', // Example background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: 'white', // Example text color
    textAlign: 'center',
  }

})


