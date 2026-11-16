# Vestibular UEMG — João Monlevade

Site de estudo gamificado para o vestibular da UEMG (Engenharia Ambiental). Mobile-first, tema claro e minimalista.

## Stack
React 19 + TypeScript + Vite, Tailwind CSS, Vitest + Testing Library.

## Comandos
```bash
npm install
npm run dev     # desenvolvimento
npm test        # testes
npm run check   # lint + tipos + testes + build (o mesmo que o CI roda)
```

## Material das provas
Os PDFs oficiais ficam em `pdfs/` e o texto extraído em `data/raw/`. Ambos são ignorados pelo git.

## Login e acompanhamento (Supabase)

O site exige login. O progresso de cada pessoa fica salvo na nuvem (Supabase) e o administrador
(Lucas) vê o desempenho da aluna (Daniela) na página **Guia > Acompanhamento**.

1. Em `Authentication > Users`, crie `dani@vestibular-uemg.app` e `lucas@vestibular-uemg.app`
   (marque *Auto Confirm User*), cada um com a senha escolhida. No login do site basta digitar
   `dani` ou `lucas`.
2. Cole `supabase/schema.sql` em `SQL Editor` e rode. Isso cria as tabelas, as regras de acesso
   e os perfis.
3. A URL e a chave *publishable* ficam em `src/cloud/supabaseApi.ts`. Elas são públicas por
   natureza; quem protege os dados são as regras de acesso do banco. **Nunca** coloque a chave
   `secret` ou `service_role` no código nem no repositório.
