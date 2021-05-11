import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
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
    paddingHorizontal: 10, 
    paddingVertical: 6,

    marginBottom: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff'
  },

  img: {
    width: 60, 
    height: 60,
    
    borderRadius: 50,

    alignItems: 'center', 
    justifyContent: 'center',

    backgroundColor: '#9a9a9a'
  }, 

  name: {
    flex: 1,

    paddingLeft: 20,
  },
  
  titleItem: {
    fontSize: 18, 
    fontWeight: 'bold',
  }, 

  dateItem: {
    color: '#a5a5a5'
  }, 

  value: {
    width: 120,

    alignItems: 'flex-end',
  }, 

  currency: {
    fontSize: 16,
    fontWeight: 'bold'
  },   

  date: {},

  scrollView: {},
  
  rightAction: {
    width: 60,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#2aa47f'
  },

  textAction: {
    fontSize: 16,
    fontWeight: 'bold', 
    
    color: '#f3f3f3'
  }, 

  leftAction: {},

  actionText: {}
})