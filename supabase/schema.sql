-- ============================================================================
-- Vestibular UEMG: banco de dados (Supabase)
-- Cole este arquivo inteiro em  SQL Editor > New query  e clique em Run.
-- Pode rodar mais de uma vez sem problema.
-- ============================================================================

-- 1) Perfis: nome de usuário, nome mostrado e papel (aluno ou administrador)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique not null,
  display_name text not null,
  role text not null default 'student' check (role in ('student', 'admin'))
);

-- 2) Progresso de cada aluno (um registro por pessoa)
create table if not exists public.student_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  progress jsonb not null default '{}'::jsonb,
  doubts jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- 3) Segurança: só quem pode, vê e altera. (RLS = regras de acesso por linha)
alter table public.profiles enable row level security;
alter table public.student_state enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

drop policy if exists "perfil: ler o proprio ou admin le todos" on public.profiles;
create policy "perfil: ler o proprio ou admin le todos"
  on public.profiles for select
  using (id = auth.uid() or public.is_admin());

drop policy if exists "estado: aluno le o proprio" on public.student_state;
create policy "estado: aluno le o proprio"
  on public.student_state for select
  using (user_id = auth.uid());

drop policy if exists "estado: admin le todos" on public.student_state;
create policy "estado: admin le todos"
  on public.student_state for select
  using (public.is_admin());

drop policy if exists "estado: aluno cria o proprio" on public.student_state;
create policy "estado: aluno cria o proprio"
  on public.student_state for insert
  with check (user_id = auth.uid());

drop policy if exists "estado: aluno atualiza o proprio" on public.student_state;
create policy "estado: aluno atualiza o proprio"
  on public.student_state for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ============================================================================
-- 4) PERFIS DOS DOIS USUARIOS
-- Rode esta parte DEPOIS de criar os usuarios em Authentication > Users, com os e-mails:
--     dani@vestibular.app   (aluna)
--     lucas@vestibular.app  (administrador: ve o desempenho dela)
-- (O dominio do e-mail nao importa: o perfil e achado pela parte antes do @.)
-- ============================================================================
insert into public.profiles (id, username, display_name, role)
select
  id,
  split_part(email, '@', 1),
  case split_part(email, '@', 1) when 'lucas' then 'Lucas' else 'Daniela' end,
  case split_part(email, '@', 1) when 'lucas' then 'admin' else 'student' end
from auth.users
where split_part(email, '@', 1) in ('dani', 'lucas')
on conflict (id) do update
  set username = excluded.username,
      display_name = excluded.display_name,
      role = excluded.role;
