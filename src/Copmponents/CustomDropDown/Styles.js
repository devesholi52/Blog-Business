import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default {
    bottom: {
        backgroundColor: '#fff',
        // marginTop: -10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        minHeight: 100,
        maxHeight: height / 6,
        width: width / 1.1,

    },
    button: {
        paddingHorizontal: 15,
        padding: 5,
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.1,

    },
    image: {
        height: 35,
        width: 35
    },
    noData: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        margin: 10,
        width: width / 1.15
    },
    noDataText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000'
    },
    itemStyle: {
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        padding: 15
    },
    searchbox: {
        fontSize: 15,
        color: '#000',
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        height: 30
    },
    valueText: {
        width: width / 1.4,

        // color: 'gray'
    }
}

const abc = StyleSheet.create({
    s: {

    }
})