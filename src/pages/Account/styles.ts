import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
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
    marginRight: 15,

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
  },

  // Styling Bank Details
  bnkContainer: {
    paddingTop: 5,
    paddingHorizontal: 8,

  },

  bnkHeader: {
    height: 250,
    marginBottom: 15,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bnkAvatar: {
    width: 100,
    height: 100,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 20,

    backgroundColor: '#ddd'
  },

  bnkTitle: {
    alignItems: 'center',

    paddingVertical: 6,
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
    fontSize: 19,
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
    fontSize: 17,

    color: '#333'
  },

  bnkBodyList: {
    marginVertical: 15,
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
  },

  bar: {

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 8,
    marginHorizontal: 5
  },

  progressBar: {
    width: 250,
    height: 16,

    borderRadius: 50
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#857CE2'
  },
})