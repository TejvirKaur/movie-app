import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchList } from '../api/tmdb';
import TypeDropdown from '../components/TypeDropDown';
import MediaList from '../components/MediaList';

const MOVIE_SUBTYPES = ['now_playing', 'popular', 'top_rated', 'upcoming'];

export default function MoviesScreen({ navigation }) {
  const [subtype, setSubtype] = useState('now_playing');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    fetchList('movie', subtype, page).then(d => { if(mounted) setData(d); });
    return () => { mounted = false; };
  }, [subtype, page]);

  return (
    <View style={styles.container}>
      <TypeDropdown
        options={MOVIE_SUBTYPES}
        value={subtype}
        onChange={val => { setSubtype(val); setPage(1); }}
        style={styles.dropdown}
      />
      <MediaList
        items={data ? data.results : []}
        navigation={navigation}
        baseType="movie"
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee7e7ff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  dropdown: {
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: '#e21b1bff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    padding: 5,
    fontWeight: 'bold',

  },
  list: {
    flex: 1,
  },
});
