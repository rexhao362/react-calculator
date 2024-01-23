import { Button } from 'react-native'

export const createButton = (symbol, name, func) => {
    return (
        <Button
            title={symbol}
            onPress={func}
            accessibilityLabel={name}
        />
    )
}

// module.exports = createButton
