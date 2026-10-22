import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

// Seção Notícias: Tab Navigator com duas abas (cada aba é um Stack)
export default function NoticiasTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // o header é do Drawer (em cima) e dos Stacks
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="tecnologia"
        options={{
          title: 'Tecnologia',
          tabBarIcon: ({ color, size }) => <Ionicons name="hardware-chip-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="esportes"
        options={{
          title: 'Esportes',
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
