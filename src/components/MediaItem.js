import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

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
        <Button
          title="More details"
          onPress={() =>
            navigation.navigate('Show', { id: item.id, typeGroup })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    paddingLeft: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#555',
    marginVertical: 4,
  },
});
