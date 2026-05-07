// App.js

import React from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';

import Header from './components/Header';
import CountryCard from './components/CountryCard';
import Footer from './components/Footer';

import styles from './styles/styles';

const countries = [
  {
    id: '1',
    nome: 'Brasil',
    capital: 'Brasília',
  },
  {
    id: '2',
    nome: 'Argentina',
    capital: 'Buenos Aires',
  },
  {
    id: '3',
    nome: 'Chile',
    capital: 'Santiago',
  },
  {
    id: '4',
    nome: 'Paraguai',
    capital: 'Assunção',
  },
  {
    id: '5',
    nome: 'Uruguai',
    capital: 'Montevidéu',
  },
  {
    id: '6',
    nome: 'Estados Unidos',
    capital: 'Washington, D.C.',
  },
  {
    id: '7',
    nome: 'Canadá',
    capital: 'Ottawa',
  },
  {
    id: '8',
    nome: 'México',
    capital: 'Cidade do México',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />

      <FlatList
        data={countries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CountryCard
            nome={item.nome}
            capital={item.capital}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      <Footer />
    </SafeAreaView>
  );
}