import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Rota: /sobre
export default function SobreScreen() {
  return (
    <View style={styles.tela}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>Sobre</Text>
        <Image source={require('../assets/news.png')} style={styles.imagem} resizeMode="contain" />
        <View style={styles.divisor} />

        <Text style={styles.texto}>Esse é o Mini App de Notícias.</Text>
        <Text style={styles.texto}>Você vai praticar diferentes tipos de navegação com React Native:</Text>
        <Text style={styles.item}>•  Drawer (raiz)</Text>
        <Text style={styles.item}>•  Tabs (Tecnologia/Esportes)</Text>
        <Text style={styles.item}>•  Stacks (Lista → Detalhes)</Text>
      </View>

      {/* Volta para a tela inicial (Notícias) */}
      <Pressable
        onPress={() => router.navigate('/tecnologia')}
        style={({ pressed }) => [styles.botao, pressed && { opacity: 0.85 }]}
      >
        <Text style={styles.botaoTexto}>VOLTAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#f6f6f6', padding: 24 },
  titulo: { fontSize: 28, fontWeight: '800', textAlign: 'center', color: '#111827', marginTop: 8 },
  imagem: { width: '100%', height: 190, marginTop: 4 },
  divisor: { height: 1, backgroundColor: '#111827', marginVertical: 16 },
  texto: { fontSize: 18, lineHeight: 26, color: '#374151' },
  item: { fontSize: 18, lineHeight: 30, color: '#374151', paddingLeft: 18 },
  botao: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 3,
  },
  botaoTexto: { color: '#fff', fontWeight: '700', fontSize: 16, letterSpacing: 0.5 },
});
