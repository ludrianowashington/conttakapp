import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    height: 220
  },
  pager: {
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,

    backgroundColor: '#8257E5'
  },
  title: {
    color: '#f3f3f3',

  },
  balance: {
    color: '#f3f3f3',
    
    fontSize: 25,
    fontWeight: 'bold'
  },
  contentView: {
    flexDirection: 'row',
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  expenses: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#45C24A'
  },
  incomes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6A49'
  }

})