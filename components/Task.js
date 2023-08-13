import { View, Text, Button, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'

const Task = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);


    const handleInput = () => {
        if (!input) {
            alert('provide a value first');
            return;
        }
        setData((prev) => {
            return [...prev, { input, id: Math.random().toString() }]
        });
        setInput("");
    }
    const handleInputChange = (col) => {
        setInput(col);
    }
    const handleDelete = (id) => {
        setData((currentData) => {
            return currentData.filter((data) => data.id !== id);
        })
    }
    return (
        <View>
            <Text style={styles.heading}>Task Application</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputContainer} placeholder='task please...'
                    value={input}
                    onChangeText={handleInputChange}
                />
                <Button title='add task' onPress={handleInput} />
            </View>
            <Text style={styles.subHeading}>User Tasks:</Text>

            <View style={styles.tasksBox}>


                {

                        data?.map((val) => {
                            return (
                                <Pressable key={val.id} onPress={() => handleDelete(val.id)}>
                                    <Text style={styles.list}>{val.input}</Text>
                                </Pressable>
                        )
                        })

                }


            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
        color: 'blue',
        fontWeight: '800',
    },
    subHeading: {
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
        color: 'green',
        fontWeight: '600',
    },
    container: {
        margin: 5,
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputContainer: {
        width: '75%',
        paddingLeft: 15,
        borderWidth: 2,
        borderColor: 'green',
    },
    list: {

        textAlign: 'center',
        borderWidth: 2,
        borderColor: "orange",
        margin: 5,
        padding: 6,
        backgroundColor: 'green',
        color: 'white',
        fontSize: 20,
        borderRadius: 10,
    },
    tasksBox: {
        margin: 8,
    }
})
export default Task;