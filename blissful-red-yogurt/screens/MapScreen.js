import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function MapScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ImageBackground
        source={{
          uri: 'https://tile.openstreetmap.org/15/9385/12185.png',
        }}
        style={styles.mapBackground}
        resizeMode="cover"
      >

        <SafeAreaView style={styles.topContainer}>

          <View style={styles.headerRow}>

            <TouchableOpacity
              style={styles.menuButton}
              activeOpacity={0.8}
            >
              <Ionicons
                name="menu"
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <View style={styles.searchBar}>

              <Ionicons
                name="search-outline"
                size={18}
                color="#9E9E9E"
                style={styles.searchIcon}
              />

              <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar"
                placeholderTextColor="#9E9E9E"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />

            </View>

          </View>

        </SafeAreaView>

        <TouchableOpacity
          style={styles.compassButton}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name="compass-outline"
            size={26}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View style={styles.bottomSheet}>

          <View style={styles.dragHandle} />

          <Text style={styles.locationTitle}>
            Largo do Taboão
          </Text>

        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E3DF',
  },

  mapBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  topContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 35 : 10,
    left: 16,
    right: 16,
    zIndex: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#6C48B6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 4,
  },

  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 38,
    paddingHorizontal: 12,

    borderWidth: 1,
    borderColor: '#E2E2E2',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  searchIcon: {
    marginRight: 6,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
    paddingVertical: 0,
  },

  compassButton: {
    position: 'absolute',
    right: 20,
    bottom: 110,

    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: '#6C48B6',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,

    zIndex: 10,
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,

    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 10,
  },

  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D1D1',
    borderRadius: 2,
    marginBottom: 12,
  },

  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C48B6',
    textAlign: 'center',
  },
});

