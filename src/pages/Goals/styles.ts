import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    padding: 7
  },

  img: {
    width: 40,
    height: 40,

    marginLeft: 10,
  },

  touchLeft: {    
    paddingLeft: 5, 

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
   marginBottom: 6
  }, 

  titleText: {
    justifyContent: 'center',
    
    fontSize: 18, 
    fontWeight: 'bold',
  },
  
  bar: {
    paddingHorizontal: 5
  }, 

  progressBar: {
    height: 13, 

    borderRadius: 50
  },

  data: {
    flex: 1,
    flexDirection: 'row',

    paddingVertical: 0,
    paddingEnd: 10,

    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },

  op: {
    
    width: 100,
    height: 40,

    justifyContent: 'center',
  },

  
})