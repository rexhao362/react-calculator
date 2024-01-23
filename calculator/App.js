import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
const styles = require('./src/styles')
const createButton = require('./src/button');
const {
    add,
    sub,
    mul,
    div,
    pow,
    pi,
    nRoot,
    fraction,
    percent,
} = require('./src/operators')


export default function App() {
    const [displayValue, setDisplayValue] = useState('0')
    const [operator, setOperator] = useState(null)
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)

    const displayNumber = num => {
        const value = displayValue === '0' ? num : displayValue + num
        setDisplayValue(value)
    }

    const clearInput = () => {
        setDisplayValue('0')
        setOperator(null)
        setFirstValue(0)
        setSecondValue(0)
    }

    const handleOperator = operator => {
        setOperator(operator)
        setFirstValue(displayValue)
        setDisplayValue('0')
    }

    const calculate = () => {
        setSecondValue(parseFloat(displayValue))
        setDisplayValue(String(operator(firstValue, secondValue)))
        setFirstValue(parseFloat(displayValue))
        setOperator(null)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <Text style={styles.displayedValue}>{displayValue}</Text>
                <Text>67877988809</Text>
                <Row></Row>
                <Row></Row>
                <Row>
                    {createButton('C', 'Clear', clearInput())} 
                    {createButton('/', 'Divide', setOperator(div))}
                </Row>
                <Row>
                    {createButton('7', '7', displayNumber('7'))}
                    {createButton('8', '8', displayNumber('8'))}
                    {createButton('9', '9', displayNumber('9'))} 
                    {createButton('X', 'Multiply', setOperator(mul))}
                </Row>
                <Row>
                    {createButton('4', '4', displayNumber('4'))}
                    {createButton('5', '5', displayNumber('5'))}
                    {createButton('6', '6', displayNumber('6'))}
                    {createButton('-', 'Minus', setOperator(sub))}
                </Row>
                <Row>
                    {createButton('1', '1', displayNumber('1'))}
                    {createButton('2', '2', displayNumber('2'))}
                    {createButton('3', '3', displayNumber('3'))}
                    {createButton('+', 'Plus', setOperator(add))}
                </Row>
                <Row>
                    {createButton('=', '=', calculate())}
                    {createButton('.', '.', displayNumber('.'))}
                    {createButton('0', '0', displayNumber('0'))}
                </Row>
            </SafeAreaView>
        </View>
    )
}
