import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/sign-up";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      if (data.success) {
        navigate("/dashboard");
      }
    },
  });
}
