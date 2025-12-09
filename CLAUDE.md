# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compile + Vite build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

### Page Structure (MVC Pattern)
Each page in `src/pages/` follows a 3-file pattern:
- **index.tsx** - Container that connects model to view
- **model.tsx** - Business logic (hooks, mutations, state)
- **view.tsx** - Pure UI component receiving props from model

```typescript
// index.tsx
export const Login = () => {
  const model = useLogin()
  return <LoginView {...model} />
}

// view.tsx - receives props, no destructuring
export const LoginView = (props: ReturnType<typeof useLogin>) => {
  // Use props.form, props.handleSubmit, etc.
}
```

### Tech Stack
- **React 19** + **TanStack Router** (type-safe routing)
- **Zustand** for state (userStore, toastStore, loadingStore)
- **TanStack Query** for server state
- **react-hook-form** + **Zod** for forms
- **Tailwind CSS 4** for styling
- **Axios** with interceptors for API

### Key Directories
- `src/routes/` - Router config with public/protected routes and ACL
- `src/services/` - API client and auth service
- `src/store/` - Zustand stores (state + dispatch pattern)
- `src/components/` - Reusable UI components

### Authentication Flow
- JWT tokens stored in cookies via `js-cookie`
- Axios interceptor adds Bearer token to requests
- Auto token refresh on 401 responses
- ACL system with roles: ADMINISTRADOR, GERENTE, USUARIO

### Environment
```
VITE_BACKEND_URL=https://api.url.com/
```

## Code Style

- TypeScript strict mode, no `any`
- Prettier: no semicolons, single quotes, 80 char width
- Portuguese for user-facing text
- Primary color: `#2D68FF`
- Font: Poppins (loaded from Google Fonts)

## Conventions

- Form validation errors should come from API, not reveal requirements (e.g., password length)
- View components use `props.x` without destructuring
- Logo components: LogoWhite, LogoBlue, LogoIcon, LogoIconWhite, LogoIconBlue

### Model/View Pattern
No model, retorne queries e mutations completas, sem desestruturar:

```typescript
// model.tsx - CORRETO
return {
  form,
  handleSubmit,
  loginMutation,           // mutation completa
  showPassword,
  toggleShowPassword
}

// model.tsx - ERRADO
return {
  isLoading: loginMutation.isPending,  // não desestruturar
  error: loginMutation.error
}
```

Na view, sempre use `props.` para acessar:

```typescript
// view.tsx - CORRETO
export const LoginView = (props: ReturnType<typeof useLogin>) => {
  return (
    <button disabled={props.loginMutation.isPending}>
      {props.loginMutation.isPending ? 'Entrando...' : 'Entrar'}
    </button>
  )
}

// view.tsx - ERRADO
export const LoginView = ({ form, isLoading }: Props) => {
  // não desestruturar props
}
```
