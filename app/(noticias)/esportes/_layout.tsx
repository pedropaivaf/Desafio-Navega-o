import { Stack } from 'expo-router';

// Stack da aba Esportes: Lista -> Detalhes
export default function EsportesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Esportes' }} />
      <Stack.Screen name="[id]" options={{ title: 'Notícia' }} />
    </Stack>
  );
}
