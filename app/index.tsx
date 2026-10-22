import { Redirect } from 'expo-router';

// Rota "/": manda o usuário direto para a seção de Notícias (aba Tecnologia)
export default function IndexScreen() {
  return <Redirect href="/tecnologia" />;
}
