import { useState } from 'react'

const App = () => {
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
        setSecondValue(Number(displayValue))
        setDisplayValue(String(operator(firstValue, secondValue)))
        setFirstValue(Number(displayValue))
        setOperator(null)
    }
}

module.exports = App
