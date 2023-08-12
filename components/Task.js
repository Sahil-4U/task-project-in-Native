import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Task = () => {
    const [input, setInput] = useState();
    const [data, setData] = useState();


    const handleInput = () => {
        setData(input);
    }
    return (
        <View>
            <Text style={styles.heading}>Task Application</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputContainer} placeholder='task please...'
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <Button title='add task' onPress={handleInput} />
            </View>
            <Text style={styles.subHeading}>User Tasks:</Text>

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
    }
})
export default Task