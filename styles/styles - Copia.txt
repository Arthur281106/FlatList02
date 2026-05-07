// styles/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingTop: 40,
  },

  header: {
    alignItems: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E1E1E',
    marginTop: 10,
  },

  flagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flag: {
    width: 40,
    height: 28,
    marginHorizontal: 4,
    borderRadius: 4,
  },

  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 10,
  },

  card: {
    backgroundColor: '#B8D1E8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  countryName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  capital: {
    fontSize: 15,
    color: '#555',
    marginTop: 6,
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default styles;