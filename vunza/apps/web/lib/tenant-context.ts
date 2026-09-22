import type { TenantContext } from "@vunza/types";

/**
 * Placeholder seguro para o contexto do tenant.
 * Não aceite tenantId vindo diretamente do body/query como fonte de autorização.
 */
export async function getTenantContext(): Promise<TenantContext | null> {
  // TODO: conectar ao mecanismo de sessão/autenticação.
  return null;
}
