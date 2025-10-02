import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { getDetails } from '../api/tmdb';

export default function ShowScreen({ route }) {
  const { id, typeGroup } = route.params; 
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let mounted = true;
    getDetails(typeGroup, id).then(d => { if(mounted) setDetails(d); });
    return () => { mounted = false; };
  }, [id, typeGroup]);

  if(!details) return <Text>Loading...</Text>;
  return (
    <ScrollView style={{ padding:16 }}>
      {details.poster_path && <Image source={{ uri:`https://image.tmdb.org/t/p/w300${details.poster_path}` }} style={{ width:'100%', height:450 }} />}
      <Text style={{ fontSize:20, fontWeight:'bold' }}>{details.title || details.name}</Text>
      <Text>{details.tagline}</Text>
      <Text style={{ marginTop:8 }}>{details.overview}</Text>
    </ScrollView>
  );
}
