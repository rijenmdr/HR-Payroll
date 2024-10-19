import AuthSectionHeader from '@/components/common/AuthSectionHeader';
import LoginForm from '@/components/container/login/LoginForm';
import LogoImage from '@/components/container/login/LogoImage';

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <LogoImage />

      <div className="flex flex-col gap-[30px] w-full">
        <AuthSectionHeader title="Welcome 👋" description="Please login here" />

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
