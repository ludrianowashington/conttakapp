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

  bnkContainer: {
    paddingTop: 5,
    paddingHorizontal: 8,

  }, 
  
  bnkHeader: {
    marginBottom: 16,
    
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  bnkAvatar: {
    width: 100,
    height: 100,
    
    borderRadius: 100,
    
    alignItems: 'center', 
    justifyContent: 'center',
    
    marginTop: 13,
    
    backgroundColor: '#7778a5'
  }, 

  bnkAvatarText: {
    fontSize: 40,

    color: '#fff'
  },

  bnkTitle: {
    alignItems: 'center',
        
    paddingTop: 12
  }, 
  
  bnkTitleText: {
    fontSize: 25,
    fontWeight: 'bold',

    color: '#77f'
  }, 

  bnkTitleValue: {
    fontSize: 18,

    color: '#828282'
  }, 

  bnkBody: {}, 

  bnkBodyContent: {},

  bnkBodyItems: {
    marginBottom: 8, 

    justifyContent: 'space-between',
    
    flexDirection: 'row'
  },

  bnkBodyItemsData: {
    marginBottom: 8
  },

  bnkBodyText: {
    fontSize: 18,
    fontWeight: 'bold', 

    color: '#76c'
  },

  bnkBodyTextItem: {
    height: 50,

    fontSize: 15,

    paddingHorizontal: 4,
    
    color: '#777'
  },

  bnkBodyTextValue: {
    fontSize: 16,

    color: '#333'
  },

  bnkBodyList: {
    paddingTop: 5,
  },

  bnkBodyListTitle: {
    marginBottom: 4,
    
    fontSize: 19, 
    fontWeight: 'bold',

    color: '#44a'
  },

  bnkBodyListContent: {
    paddingTop: 4,
    paddingHorizontal: 5
  },

  bnklistItem: {
    paddingHorizontal: 10, 
    paddingVertical: 6,

    marginBottom: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#eee'
  },
  
  bnkImg: {
    width: 70, 
    height: 70,
    
    
    borderRadius: 50,
    
    alignItems: 'center', 
    justifyContent: 'center',
    
    backgroundColor: '#a1d53e'
  },

  bnkListName: {
    flex: 1,

    paddingLeft: 20,
  }, 

  bnkTitleItem: {
    fontSize: 18, 
    fontWeight: 'bold',
  }, 

  bnkDateItem: {
    color: '#a5a5a5'
  },

  bnkValue: {
    width: 120,

    alignItems: 'flex-end',
  }, 

  bnkCurrency: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  bnkFooter: {
    flexDirection: 'row'
  }, 

  bnkFooterBtn: {
    flex: 1,
    paddingHorizontal: 12, 
    paddingVertical: 14,
    
    marginHorizontal: 4,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "#9393d3",

    borderRadius: 10  
  },

  bnkFooterBtnText: {
    fontSize: 18, 
    
    color: '#fff'
  }
})