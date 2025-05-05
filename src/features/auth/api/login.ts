import supabase from "@/lib/supabase-client";

type LoginPayload = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginPayload) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
