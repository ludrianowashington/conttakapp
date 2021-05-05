import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    padding: 7
  },

  touchableLeft: {
    padding: 5,  
    marginLeft: 8,

  },

  touchableRight: { 
    padding: 5,  
    marginRight: 8,

  },

  text: { 
    alignSelf: 'center', 
    color: '#f9f9f9'
  },

  listItem: {
    padding: 8,

    marginBottom: 5,

    borderRadius: 10,

    flexDirection: 'column',

    backgroundColor: '#e2e5ef'
  },

  titleList: {
   
  }, 
  
  bar: {}, 

  data: {
    flex: 1,
    flexDirection: 'row',

    paddingVertical: 20,
    paddingEnd: 10,

    alignItems: 'flex-end',
  },

  rest: {
    fontSize: 18,

    color: '#a5a5a5', 

    marginBottom: 8
  },

  current: {
    fontSize: 16,
    fontWeight: 'bold'

  },

  expected: {
    fontSize: 16,
    fontWeight: 'bold', 
    
    color: '#9a9a9a'

  },
})