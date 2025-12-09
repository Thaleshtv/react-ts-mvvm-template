import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { useLogin } from './model'
import { LogoWhite, LogoIconBlue } from '../../components/Logo'

export const LoginView = (props: ReturnType<typeof useLogin>) => {
  return (
    <div className="min-h-screen w-full bg-white lg:bg-gradient-to-br lg:from-primary-dark lg:via-primary lg:to-primary-light flex items-center justify-center p-0 lg:p-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <div className="absolute top-16 right-[12%] w-28 h-28 bg-white/5 rounded-2xl" />
        <div className="absolute top-1/3 -right-6 w-16 h-48 bg-white/5 rounded-2xl" />
        <div className="absolute bottom-24 left-[8%] w-20 h-20 bg-white/5 rounded-xl" />
        <div className="absolute -bottom-6 left-[20%] w-80 h-24 bg-white/5 rounded-3xl" />
        <div className="absolute bottom-16 right-[18%] w-24 h-16 bg-white/5 rounded-2xl" />
        <div className="absolute top-8 left-[40%] w-12 h-12 bg-white/5 rounded-lg" />
      </div>

      <div className="flex flex-col w-full min-h-screen lg:hidden">
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-12 pb-24 flex items-center justify-center">
          <LogoWhite width={140} />
        </div>

        <div className="flex-1 bg-white -mt-12 rounded-t-[40px] px-8 pt-10 pb-8">
          <h1 className="text-2xl font-semibold text-text mb-2">
            Bem-vindo!
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Faça login para continuar.
          </p>

          <form onSubmit={props.handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                {...props.form.register('email')}
                placeholder="E-mail"
                className="w-full py-4 px-4 border border-gray-200 rounded-lg bg-white text-base text-text outline-none placeholder:text-text-muted focus:border-primary transition-colors"
              />
              {props.form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {props.form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <div className="relative">
                <input
                  type={props.showPassword ? 'text' : 'password'}
                  {...props.form.register('password')}
                  placeholder="Senha"
                  className="w-full py-4 px-4 pr-12 border border-gray-200 rounded-lg bg-white text-base text-text outline-none placeholder:text-text-muted focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={props.toggleShowPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                >
                  {props.showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {props.form.formState.errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {props.form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div className="text-right mb-8">
              <a href="#" className="text-sm text-primary font-medium">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={props.loginMutation.isPending}
              className="w-full py-4 bg-primary text-white rounded-lg font-semibold text-base cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {props.loginMutation.isPending ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-text-light">
            Não tem uma conta?{' '}
            <a href="#" className="text-primary font-semibold">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>

      <div className="relative hidden lg:flex flex-row w-full max-w-[1400px] min-h-[700px] overflow-hidden shadow-2xl z-10">
        <div className="absolute top-4 right-4 z-10">
          <LogoIconBlue size={40} />
        </div>

        <div className="flex-1 bg-primary flex items-center justify-center p-12">
          <LogoWhite width={280} />
        </div>

        <div className="flex-1 bg-white flex items-center justify-center p-10">
          <div className="w-full max-w-[360px]">
            <h1 className="text-3xl font-semibold text-text mb-8">
              Bem-vindo!
            </h1>

            <form onSubmit={props.handleSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-medium text-text-light mb-2">
                  E-mail
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <span className="px-3 text-text-muted">
                    <FiMail size={18} />
                  </span>
                  <input
                    type="email"
                    {...props.form.register('email')}
                    placeholder="Digite seu e-mail"
                    className="flex-1 py-3 pr-3 bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
                  />
                </div>
                {props.form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {props.form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-text-light mb-2">
                  Senha
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <span className="px-3 text-text-muted">
                    <FiLock size={18} />
                  </span>
                  <input
                    type={props.showPassword ? 'text' : 'password'}
                    {...props.form.register('password')}
                    placeholder="Digite sua senha"
                    className="flex-1 py-3 bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
                  />
                  <button
                    type="button"
                    onClick={props.toggleShowPassword}
                    className="p-3 text-text-muted hover:text-primary transition-colors"
                  >
                    {props.showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {props.form.formState.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {props.form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-text-light">Lembrar de mim</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <button
                type="submit"
                disabled={props.loginMutation.isPending}
                className="w-full py-3 bg-primary text-white rounded-full font-semibold text-base cursor-pointer hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {props.loginMutation.isPending ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-text-light">
              Não tem uma conta?{' '}
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
