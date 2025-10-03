import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';
import { getDetails } from '../api/tmdb';

export default function ShowScreen({ route }) {
  const { id, typeGroup } = route.params; 
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let mounted = true;
    getDetails(typeGroup, id).then(d => { if(mounted) setDetails(d); });
    return () => { mounted = false; };
  }, [id, typeGroup]);

  if(!details) return <Text style={styles.loading}>Loading the content...</Text>;

  return (
    <ScrollView style={styles.container}>
      {details.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}
          style={styles.poster}
          resizeMode="cover"
        />
      )}
      <Text style={styles.title}>{details.title || details.name}</Text>
      {details.tagline ? <Text style={styles.tagline}>{details.tagline}</Text> : null}
      <View style={styles.overviewContainer}>
        <Text style={styles.overview}>{details.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fefefe',
  },
  loading: {
    fontSize: 16,
    color: '#4f4f4fff',
    textAlign: 'center',
    marginTop: 50,
  },
  poster: {
    width: '100%',
    height: 450,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 12,
  },
  overviewContainer: {
    marginTop: 8,
    paddingBottom: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
