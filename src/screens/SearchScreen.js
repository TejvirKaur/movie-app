import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
    if(!query.trim()) { setError('Please enter a search term'); return; }
    const data = await search(type, query);
    setResults(data);
  };

  return (
    <View style={{ flex:1, padding:8 }}>
      <TextInput placeholder="Search movies, TV..." value={query} onChangeText={setQuery} />
      <Button title="Search" onPress={doSearch} />
      {error ? <Text style={{color:'red'}}>{error}</Text> : null}
      {!results && !error ? <Text>Please enter a search query to begin searching.</Text> : null}
      {results && <MediaList items={results.results} navigation={navigation} baseType={type==='multi'?null:type} />}
    </View>
  );
}
