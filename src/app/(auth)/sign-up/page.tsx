import RegisterForm from "@/components/auth/register-form";

function SignUpPage() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <RegisterForm />
    </div>
  );
}

export default SignUpPage;
