import { router } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import CardNoticia from '@/components/CardNoticia';
import { getNoticias, type Categoria } from '@/data/noticias';

// Tela de lista usada pelas duas abas (muda só a categoria)
export default function ListaNoticias({ categoria }: { categoria: Categoria }) {
  return (
    <FlatList
      style={styles.lista}
      contentContainerStyle={styles.conteudo}
      data={getNoticias(categoria)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardNoticia
          noticia={item}
          onPress={() =>
            router.push({
              pathname: categoria === 'tecnologia' ? '/tecnologia/[id]' : '/esportes/[id]',
              params: { id: item.id },
            })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { flex: 1, backgroundColor: '#f6f6f6' },
  conteudo: { padding: 16, paddingTop: 24 },
});
