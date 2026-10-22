# Desafio-Navega-o — Mini App de Notícias

Desafio de navegação em React Native com **Expo Router** + TypeScript.

## Hierarquia de navegação

```
Drawer (raiz)                      app/_layout.tsx
├── Notícias  → Tabs               app/(noticias)/_layout.tsx
│   ├── Tecnologia → Stack         app/(noticias)/tecnologia/
│   │     Lista (index) → Detalhes ([id])
│   └── Esportes   → Stack         app/(noticias)/esportes/
│         Lista (index) → Detalhes ([id])
└── Sobre                          app/sobre.tsx  (descrição + imagem + botão Voltar)
```

## Requisitos atendidos

- Drawer como navegador principal, com as opções **Notícias** e **Sobre**
- Tabs inferiores **Tecnologia** e **Esportes**, cada uma com seu Stack (Lista → Detalhes)
- Header do detalhe dinâmico com `navigation.setOptions({ title })`
- Componentização: `CardNoticia`, `ListaNoticias` e `DetalheNoticia` reutilizados nas duas categorias
- Ícones nas abas e no menu do Drawer (Ionicons)

## Estrutura

```
app/
├── _layout.tsx
├── index.tsx                  redireciona "/" para /tecnologia
├── sobre.tsx
└── (noticias)/
    ├── _layout.tsx
    ├── tecnologia/{_layout,index,[id]}.tsx
    └── esportes/{_layout,index,[id]}.tsx
components/  CardNoticia, ListaNoticias, DetalheNoticia
data/        noticias.ts
assets/      news.png
```

## Rodar

```bash
npm install
npx expo start
```

No Snack: https://snack.expo.dev
