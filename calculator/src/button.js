import { Button } from 'react-native'

const createButton = (symbol, name, func) => {
    return (
        <Button
            title={symbol}
            onPress={func}
            accessibilityLabel={name}
        />
    )
}

module.exports = createButton
