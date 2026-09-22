# Segurança

## Regras

- Senhas devem ser armazenadas apenas como hash forte.
- Nunca registrar senha, token, cookie de sessão ou segredo em logs.
- Validar entradas no servidor.
- Aplicar rate limiting aos endpoints de autenticação.
- Usar cookies seguros para sessão quando aplicável.
- Validar autorização em todas as operações protegidas.
- Isolar dados por tenant.
- Manter segredos exclusivamente em variáveis de ambiente.
- LGPD deve ser considerada desde o desenho dos dados.

## Checklist antes de produção

- [ ] AUTH_SECRET forte
- [ ] DATABASE_URL de produção
- [ ] Cookies Secure
- [ ] Rate limiting
- [ ] Logs sem dados sensíveis
- [ ] Backups do banco
- [ ] Migrações revisadas
- [ ] CORS/regras de origem revisadas
- [ ] Headers de segurança
