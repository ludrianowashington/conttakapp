import { StyleSheet } from "react-native";
import Constants from "expo-constants";

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

  view: {
    paddingHorizontal: 10
  },

  card: {
    flex: 1, 

    height: 400,
    padding: 10,
    marginTop: 13,
    
    borderRadius: 10,

    backgroundColor: '#e2e5ef'
  }, 

  titleCard: {
    paddingBottom: 15,

    fontSize: 18,
    fontWeight: 'bold',
    
    color: '#857CE2'
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
});