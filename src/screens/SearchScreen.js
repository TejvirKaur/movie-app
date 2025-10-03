import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { search } from '../api/tmdb';
import MediaList from '../components/MediaList';

const SEARCH_TYPES = ['movie','multi','tv'];

export default function SearchScreen({ navigation }) {
  const [type, setType] = useState('movie');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const doSearch = async () => {
    setError('');
    if(!query.trim()) { setError('Please enter a movie or TV serial name......'); return; }
    const data = await search(type, query);
    setResults(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies, TV..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={doSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {!results && !error ? (
        <Text style={styles.prompt}>Please enter a search query to begin searching.</Text>
      ) : null}

      {results && (
        <MediaList
          items={results.results}
          navigation={navigation}
          baseType={type==='multi'?null:type}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fefefe',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#070000ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#090000ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#fcf9f9ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  prompt: {
    color: '#555',
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
});
