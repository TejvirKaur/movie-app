import React from 'react';
import { FlatList } from 'react-native';
import MediaItem from './MediaItem';

export default function MediaList({ items, navigation, baseType }) {
  if (!items || items.length === 0) return null;

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MediaItem
          item={item}
          navigation={navigation}
          typeGroup={baseType || item.media_type} 
        />
      )}
    />
  );
}
