import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  view: {
    flex: 1,
    height: 150,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  display: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3BAD5',
  },

  icons: {
    flex: .1,

    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputText: {
    flex: .9,
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
    color: '#8a8a8a'
  },

  viewInputs: {
    flex: 1,

    backgroundColor: '#a42add'
  }
})