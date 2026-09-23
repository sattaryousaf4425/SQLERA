# SQLERA Production

Production foundation for the SQLERA free public beta.

## Included

- Email/password signup and login
- Email verification and password reset
- Protected learner dashboard
- 36-challenge SQL practice lab
- Supabase PostgreSQL schema and Row Level Security
- Cloud progress and assessment tables
- 12 structured SQL tutorials with cloud completion tracking

## Setup

1. Copy .env.example to .env.local and add the Supabase Project URL and publishable key.
2. In Supabase SQL Editor, run both migration files in numeric order.
3. In Authentication settings, set the Site URL to the deployed app URL.
4. Add localhost and production dashboard/reset-password redirect URLs.
5. Run npm install and npm run dev.

Never place the Supabase secret key or database password in browser environment variables.
