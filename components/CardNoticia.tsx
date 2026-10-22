import { Pressable, StyleSheet, Text } from 'react-native';
import type { Noticia } from '@/data/noticias';

type Props = {
  noticia: Noticia;
  onPress: () => void;
};

// Card reutilizado nas listas das abas Tecnologia e Esportes
export default function CardNoticia({ noticia, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#00000010' }}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
    >
      <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo} numberOfLines={2}>
        {noticia.resumo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 22,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  categoria: { fontSize: 13, letterSpacing: 1, color: '#6b7280', marginBottom: 4 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 4 },
  resumo: { fontSize: 16, color: '#374151', lineHeight: 22 },
});
