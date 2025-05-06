import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../api/logout";

export function useLogout() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/sign-in");
    },
  });

  return mutation;
}
