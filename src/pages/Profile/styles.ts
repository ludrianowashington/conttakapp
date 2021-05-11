import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  img: {
    width: 40,
    height: 40,

    marginLeft: 10,
  },

  touchLeft: {    
    paddingLeft: 5, 

  },

  buttonsTouch: {
    width: 90, 
    flexDirection: 'row', 

    justifyContent: 'space-around',

  },

  touchableRight: { 
    padding: 5,  
    marginRight: 8,

  },

  text: { 
    alignSelf: 'center', 
    color: '#f9f9f9'
  },

  profileContainer: {
    flex: .3,
    
    paddingHorizontal: 10,
    paddingVertical: 6,

    
  },
  
  statistics: {
    flexDirection: 'row', 
    
    height: 100,
    
    // backgroundColor: '#19f9f9',
    
    alignItems: 'center', 
  }, 

  image: {
    width: 90, 
    height: 90, 

    borderRadius: 50,

    marginVertical: 7,
    marginLeft: 5,

    alignItems: 'center', 
    justifyContent: 'center', 

    backgroundColor: '#d2d5ef'
  },
  
  letter: {
    fontSize: 20,
  },

  data: {
    width: 180,

    flexDirection: 'row',

    marginLeft: 20,

    justifyContent: 'space-between'
  },

  dataItem: {
    flex: 1, 

    alignItems: 'center',
    justifyContent: 'center'
  },

  value: {
    fontSize: 20, 
    fontWeight: 'bold',

    color: '#857CE2'
  }, 

  title: {
    fontSize: 16, 
    fontWeight: '600',

    color: '#47497a'
  },

  bar: {
    
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 8,
    marginHorizontal: 5,
    
    

  }, 

  progressBar: {
    width: 250,
    height: 16, 

    borderRadius: 50
  },

})