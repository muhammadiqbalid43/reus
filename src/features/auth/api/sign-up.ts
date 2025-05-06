import supabase from "@/lib/supabase-client";

export interface SignUpFormData {
  email: string;
  password: string;
  fullName: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

export async function signUp({
  email,
  password,
  fullName,
}: SignUpFormData): Promise<{
  success: boolean;
  user?: User;
  error?: unknown;
}> {
  try {
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError || !authData.user) {
      throw signUpError || new Error("Failed to create user");
    }

    const { error: insertError } = await supabase.from("users").insert({
      id: authData.user.id,
      email: email,
      full_name: fullName,
    });

    if (insertError) {
      throw insertError;
    }

    const { data: userData, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (fetchError) {
      throw fetchError;
    }

    return {
      success: true,
      user: userData as User,
    };
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      success: false,
      error,
    };
  }
}
