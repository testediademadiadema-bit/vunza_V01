# Arquitetura VUNZA — Fase 1

## Princípios

1. Next.js full-stack como aplicação principal.
2. Monorepo Turborepo.
3. PostgreSQL + Prisma.
4. Multi-tenancy por `tenantId`.
5. Lógica sensível somente no servidor.
6. Sem NestJS, microserviços ou worker separado na Fase 1.
7. Preparação para extração futura de serviços somente quando houver necessidade real.

## Fluxo

```text
Browser
  ↓
Next.js App Router
  ↓
Server Components / Route Handlers
  ↓
Contexto autenticado
  ↓
Autorização
  ↓
Prisma
  ↓
PostgreSQL / Neon
```

## Regra crítica de multi-tenancy

O frontend nunca define livremente o tenant que será consultado.

O servidor obtém o tenant a partir da sessão/contexto autenticado e usa esse contexto nas consultas.

Exemplo conceitual:

```ts
where: {
  tenantId: currentTenantId,
  id: resourceId
}
```
