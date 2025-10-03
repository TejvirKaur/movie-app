import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function TypeDropdown({ options, value, onChange }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            mode="outlined"
            onPress={openMenu}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            {value}
          </Button>
        }
        contentStyle={styles.menuContent}
      >
        {options.map((opt) => (
          <Menu.Item
            key={opt}
            onPress={() => {
              onChange(opt);
              closeMenu();
            }}
            title={opt}
            titleStyle={styles.menuItemTitle}
          />
        ))}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    borderColor: '#0c0200ff',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonLabel: {
    color: '#000000ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuContent: {
    backgroundColor: '#d5d1d1ff',
    borderRadius: 8,
  },
  menuItemTitle: {
    fontSize: 14,
    color: '#101010ff',
  },
});

