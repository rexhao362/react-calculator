import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end',
    },
    displayedValue: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10, 
    },
    row: {
        flexDirection: 'row'
    },
})

module.exports = styles