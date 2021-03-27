import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8257E5',
    resizeMode: 'contain'
  },

  logo: {
    width: '55%',
    height: '15%',
    marginBottom: 40,
    resizeMode: 'contain'
  },
  input: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginBottom: 15,
    marginHorizontal: 20,
    fontSize: 15
  },
  button: {
    width: '80%',
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    borderRadius: 5, 
    backgroundColor: '#04d361',
    alignSelf: 'center', 
    alignItems: 'center'
  }, 
  text: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16, 
    fontWeight: '700', 
    color: '#fff'
  }, 
  section: {
    width: '80%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 13, 
    marginBottom: 15
  }, 

  link: {
    width: 'auto', 
    backgroundColor: '#8257e5', 
    paddingVertical: 3
  }
});