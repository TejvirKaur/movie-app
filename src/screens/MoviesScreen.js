import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    <View style={{ flex:1 }}>
      <TypeDropdown options={MOVIE_SUBTYPES} value={subtype} onChange={val => { setSubtype(val); setPage(1); }} />
      <MediaList items={data ? data.results : []} navigation={navigation} baseType="movie" />
    </View>
  );
}
