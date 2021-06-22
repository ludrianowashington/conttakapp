import { Poppins_100Thin, Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
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

  actionText: {},

  dtContainer:{
    flex: 1,
    
    
    paddingHorizontal: 10
  }, 
  
  dtHeader: {
    flexDirection: 'row', 
    
    alignItems: 'center', 
    justifyContent: 'space-around',
    
    height: 120,
    paddingHorizontal: 20,
    
  }, 
  
  dtImage:{
    width: 70, 
    height: 70,
    
    marginTop: 18,
    
    borderRadius: 50,
    
    alignItems: 'center', 
    justifyContent: 'center',
    
    backgroundColor: '#a1d53e'
    
  }, 
  
  dtValue: {
    fontSize: 30, 
    
    fontWeight: 'bold'
  }, 
  
  dtBody: {
    paddingHorizontal: 3,
    flexDirection: 'column',

  },
  dtSituation:{
    paddingBottom: 9,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  colContent: {},

  dtColContent: {
    justifyContent: 'space-between', 
    flexDirection: 'row'
  },

  content: {
    paddingVertical: 5,
    justifyContent: 'space-between',

    flexDirection: 'row'
  },
  dtContent: {
    flexDirection: 'row'
  },
  dtTextCaps: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#76f'
  }, 
  dtTextDescr: {
    fontSize: 19,
    paddingLeft: 8,
    fontWeight: 'bold',
    color: '#777'
  }, 

  contentButton: {
    marginTop: 40,
    height: 50,

    flexDirection: 'row', 

  }, 
  
  dtbutton: {
    flex: 1,
    paddingHorizontal: 12, 
    paddingVertical: 4,
    
    marginHorizontal: 4,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "#9393d3",

    borderRadius: 10
  }, 
  
  dtButtonText: {
    fontSize: 18, 
    
    color: '#fff'
  }
})