import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
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
            return [...prev, input]
        });
        setInput("");
    }
    const handleInputChange = (col) => {
        setInput(col);
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
                    data?.map((val, index) => {
                        return (
                            <Text key={index} style={styles.list}>{val}</Text>
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
        textTransform: 'uppercase',
        borderWidth: 2,
        borderColor: 'green',
    },
    list: {
        textAlign: 'center',
        width: '20%',
        borderWidth: 2,
        borderColor: "orange",
        margin: 5,
        padding: 2,
    },
    tasksBox: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap-reverse',
    }
})
export default Task;