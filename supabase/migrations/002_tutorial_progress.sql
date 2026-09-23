create table public.tutorial_progress (user_id uuid not null references auth.users(id) on delete cascade,tutorial_id text not null,level text not null check (level in ('Beginner','Intermediate','Pro')),completed_at timestamptz not null default now(),primary key (user_id,tutorial_id));
alter table public.tutorial_progress enable row level security;
create policy "Users read own tutorial progress" on public.tutorial_progress for select using (auth.uid()=user_id);
create policy "Users insert own tutorial progress" on public.tutorial_progress for insert with check (auth.uid()=user_id);
create policy "Users update own tutorial progress" on public.tutorial_progress for update using (auth.uid()=user_id);
create index idx_tutorial_progress_user_level on public.tutorial_progress(user_id,level);
