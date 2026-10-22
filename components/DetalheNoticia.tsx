import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { getNoticia, type Categoria } from '@/data/noticias';

// Tela de detalhe usada pelos dois stacks
export default function DetalheNoticia({ categoria }: { categoria: Categoria }) {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const noticia = getNoticia(categoria, id);

  // Header dinâmico: o título da tela passa a ser o título da notícia
  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia?.titulo ?? 'Notícia' });
  }, [navigation, noticia]);

  if (!noticia) {
    return (
      <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
        <Text style={styles.texto}>Notícia não encontrada.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.texto}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#f6f6f6' },
  conteudo: { padding: 24 },
  categoria: { fontSize: 14, color: '#6b7280', marginBottom: 6 },
  titulo: { fontSize: 24, fontWeight: '800', color: '#111827', marginBottom: 12 },
  texto: { fontSize: 18, lineHeight: 28, color: '#1f2937' },
});
