import { StyleSheet } from 'react-native';

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

  // Details Goals  
  GlContainer: {
    paddingTop: 5,
    paddingHorizontal: 8,

  },

  glHeader: {
    marginBottom: 16,

    flexDirection: 'column',
    alignItems: 'center',
  },

  glPerc: {
    width: 100,
    height: 100,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 13,

    backgroundColor: '#7778a5'
  },

  glPercText: {
    fontSize: 30,

    color: '#fff'
  },

  glTitle: {
    alignItems: 'center',

    paddingTop: 12
  },

  glTitleText: {
    fontSize: 25,
    fontWeight: 'bold',

    color: '#77f'
  },

  glValue: {
    marginTop: 10,

    paddingLeft: 18,
    paddingHorizontal: 10
  },

  glValueText: {
    fontSize: 16,

    color: '#5f5f5f'
  },

  glValueCurrency: {
    fontSize: 22,
    fontWeight: 'bold',

    color: '#6f6f6f'
  },


  glBody: {
    flex: 1,

    marginTop: 30,

    borderRadius: 10,

    backgroundColor: '#d8d8d8'
  },

  glBodyTitle: {
    paddingVertical: 10,
    paddingHorizontal: 19,

  },

  glBodyTitleText: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#77f'
  },

  glList: {
    paddingHorizontal: 8,

    height: 400
  },

  glListItem: {
    padding: 8,

    marginBottom: 5,

    borderRadius: 10,

    flexDirection: 'row',

    backgroundColor: '#e2e5ef'
  },

  glImage: {
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

  submit: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButton: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#65D26A'
  },
})