import SignUpForm from "@/features/auth/components/sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex min-h-svh gap-6 bg-muted p-6 md:p-10 items-center justify-center">
      <div className="flex w-full flex-col max-w-sm gap-6">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
