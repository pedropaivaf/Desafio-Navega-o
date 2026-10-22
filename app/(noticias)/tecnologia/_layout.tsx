import { Stack } from 'expo-router';

// Stack da aba Tecnologia: Lista -> Detalhes
export default function TecnologiaStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Tecnologia' }} />
      {/* o título de [id] é trocado dinamicamente com navigation.setOptions */}
      <Stack.Screen name="[id]" options={{ title: 'Notícia' }} />
    </Stack>
  );
}
