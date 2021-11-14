import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    view: {
        height: 150,

        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    display: {
        height: 100,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#B3BAD5',
    },

    icons: {
        flex: .2,

        paddingHorizontal: 10,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textFormInput: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#8175BA'
    },

    inputText: {
        flex: .8,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: '#B3BAD5',
        alignSelf: 'center',
        textAlign: 'right',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        fontSize: 40,
        color: '#8175BA',
    },

    buttonGroupContainer: {
        height: 50,
        marginHorizontal: 0,
        marginVertical: 0,
        borderWidth: 0
    },

    button: {
        backgroundColor: '#8175BA'
    },

    buttonGroup: {
        backgroundColor: '#C3CAD5'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#8175BA',
    },

    viewInputs: {
        flex: 1
    },

    form: {
        paddingVertical: 12,
    },

    formInputs: {
        height: 80,
        paddingVertical: 6,
        paddingHorizontal: 15,
    },

    textForm: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8175BA',

    },

    inputForm: {
        height: 25,
        marginTop: 4,
        fontSize: 20,
        color: '#8175BA',
    },

    buttonForm: {
        fontSize: 17,
        color: '#8175BA',

    },

    viewButtons: {
        flex: .7,

        flexDirection: 'row',
    },

    viewSelection: {
        flex: .3,
        paddingVertical: 5,
        paddingHorizontal: 9,
    },

    buttonsGroup: {
        flexDirection: 'row',
    },

    buttonType: {
        height: 25,
        borderWidth: 1,
        borderColor: '#8175BA',
        borderRadius: 50,
        marginRight: 9,
        marginTop: 9,
        paddingHorizontal: 14,
        justifyContent: 'center'
    },

    buttonTypeText: {
        fontSize: 18,
        color: '#8175BA',

    },

    formButton: {
        height: 70,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formButtonText: {
        fontSize: 22,
        color: '#8175BA',
    },

    submit: {
        flex: 1,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    submitButton: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#65D26A'
    },

})