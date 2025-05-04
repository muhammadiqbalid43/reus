import supabase from "@/lib/supabase-client";

type RegisterPayload = {
  email: string;
  password: string;
};

export async function register({ email, password }: RegisterPayload) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
