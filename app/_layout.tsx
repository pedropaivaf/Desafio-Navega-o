import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Layout raiz: Drawer Navigator é o navegador principal do app
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Drawer
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveTintColor: '#007AFF',
          drawerActiveBackgroundColor: '#ddecff',
          drawerInactiveTintColor: '#6b7280',
        }}
      >
        {/* Opção 1 do menu: grupo (noticias) = Tabs + Stacks */}
        <Drawer.Screen
          name="(noticias)"
          options={{
            title: 'Notícias',
            drawerIcon: ({ color, size }) => <Ionicons name="newspaper-outline" size={size} color={color} />,
          }}
        />

        {/* Opção 2 do menu */}
        <Drawer.Screen
          name="sobre"
          options={{
            title: 'Sobre',
            drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
          }}
        />

        {/* index.tsx só redireciona para as notícias: fica fora do menu */}
        <Drawer.Screen
          name="index"
          options={{ drawerItemStyle: { display: 'none' }, headerShown: false }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
