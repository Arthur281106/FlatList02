// components/Header.js

import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.flagsContainer}>
        <Image
          source={{
            uri: 'https://flagcdn.com/w40/se.png',
          }}
          style={styles.flag}
        />

        <Image
          source={{
            uri: 'https://flagcdn.com/w40/gb.png',
          }}
          style={styles.flag}
        />

        <Image
          source={{
            uri: 'https://flagcdn.com/w40/pt.png',
          }}
          style={styles.flag}
        />

        <Image
          source={{
            uri: 'https://flagcdn.com/w40/hr.png',
          }}
          style={styles.flag}
        />
      </View>

      <Text style={styles.title}>
        Países
      </Text>
    </View>
  );
}