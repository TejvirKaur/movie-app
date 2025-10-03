import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MediaItem({ item, navigation, typeGroup }) {
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
    : null;

  return (
    <View style={styles.container}>
      {posterUrl && (
        <Image source={{ uri: posterUrl }} style={styles.poster} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        {date && <Text style={styles.date}>{date}</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Show', { id: item.id, typeGroup })
          }
        >
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#ada1a1ff',
    gap: 10,
  },
  poster: {
    width: 90,
    height: 140,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#474141ff',
    marginVertical: 4,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#0a0000ff', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-start', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
