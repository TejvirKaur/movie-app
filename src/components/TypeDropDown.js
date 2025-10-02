import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function TypeDropdown({ options, value, onChange }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>{value}</Button>}
      >
        {options.map((opt) => (
          <Menu.Item
            key={opt}
            onPress={() => {
              onChange(opt);
              closeMenu();
            }}
            title={opt}
          />
        ))}
      </Menu>
    </View>
  );
}
