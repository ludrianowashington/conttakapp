import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20, 
    paddingVertical: 5
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

    flexDirection: 'row',

    backgroundColor: '#e2e5ef'
  },
  
  img: {
    width: 80, 
    height: 80,
    
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 15,

    alignItems: 'center', 
    justifyContent: 'center',

    backgroundColor: '#9a9a9a'
  }, 

  data: {
    flex: 1,
    
    paddingVertical: 20,
    paddingEnd: 10,

    alignItems: 'flex-end',

  },

  description: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#3242ab'
  },

  type: {
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

  options: {
    flex: 1, 

    marginTop: 12, 

    padding: 8,

    flexDirection: 'row'
  }, 

  buttonOptions: {
    width: 30, 
    height: 30, 

    alignItems: 'center',
    justifyContent: 'center',

    marginHorizontal: 3,
    // backgroundColor: '#7778a5'
  }
})