// components/Footer.js

import React from 'react';
import { View, Image } from 'react-native';

import styles from '../styles/styles';

export default function Footer() {
  return (
    <View style={styles.footer}>
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
    </View>
  );
}