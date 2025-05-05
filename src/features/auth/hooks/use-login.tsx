import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });
}
