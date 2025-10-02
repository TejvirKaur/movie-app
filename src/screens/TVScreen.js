import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchList } from '../api/tmdb';
import TypeDropdown from '../components/TypeDropDown'
import MediaList from '../components/MediaList';

const TV_SUBTYPES = ['airing_today', 'on_the_air', 'popular', 'top_rated'];

export default function TVScreen({ navigation }) {
  const [subtype, setSubtype] = useState('popular'); 
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    fetchList('tv', subtype, page).then((d) => {
      if (mounted) setData(d);
    });
    return () => {
      mounted = false;
    };
  }, [subtype, page]);

  return (
    <View style={{ flex: 1 }}>
      <TypeDropdown
        options={TV_SUBTYPES}
        value={subtype}
        onChange={(val) => {
          setSubtype(val);
          setPage(1);
        }}
      />
      <MediaList
        items={data ? data.results : []}
        navigation={navigation}
        baseType="tv"
      />
    </View>
  );
}
