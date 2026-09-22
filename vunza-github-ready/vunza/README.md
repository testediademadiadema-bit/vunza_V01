# VUNZA

**VUNZA — tecnologia que movimenta seu negócio.**

Plataforma SaaS para pequenos negócios, construída inicialmente como monorepo Turborepo + Next.js + PostgreSQL/Prisma e preparada para deploy na Vercel.

## Arquitetura

```text
vunza/
├── apps/
│   └── web/
├── packages/
│   ├── database/
│   ├── ui/
│   ├── types/
│   ├── config/
│   └── shared/
├── docs/
└── tests/
```

## Requisitos

- Node.js 20+
- pnpm 10+
- PostgreSQL/Neon

## Instalação

```bash
pnpm install
cp .env.example .env.local
pnpm db:generate
pnpm db:push
pnpm dev
```

Abra `http://localhost:3000`.

## Segurança

- Nunca commit `.env` ou credenciais.
- `tenantId` nunca deve ser confiado diretamente ao cliente.
- Toda consulta de entidade pertencente a uma empresa deve ser filtrada pelo contexto autenticado do tenant.
- Erros de produção não devem expor stack traces, tokens ou credenciais.

## Fase 1

A primeira fase concentra:

- autenticação;
- empresas/tenants;
- usuários;
- papéis;
- permissões;
- isolamento multi-tenant;
- dashboard inicial;
- base para evolução comercial.

## Deploy

O projeto foi estruturado para Vercel. Configure as variáveis de ambiente do ambiente Preview e Production e execute as migrações de banco de forma controlada.
