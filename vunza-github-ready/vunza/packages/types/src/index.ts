export type ApiError = {
  statusCode: number;
  code: string;
  message: string;
  requestId?: string;
};

export type TenantContext = {
  tenantId: string;
  userId: string;
  role: "OWNER" | "ADMIN" | "EMPLOYEE";
};
