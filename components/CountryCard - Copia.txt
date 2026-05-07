// components/CountryCard.js

import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

export default function CountryCard({ nome, capital }) {
  return (
    <View style={styles.card}>
      <Text style={styles.countryName}>
        {nome}
      </Text>

      <Text style={styles.capital}>
        Capital: {capital}
      </Text>
    </View>
  );
}