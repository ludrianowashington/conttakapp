import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
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
    
    paddingHorizontal: 5,

  }, 

  progressBar: {
    height: 18, 

    borderRadius: 50
  },
})