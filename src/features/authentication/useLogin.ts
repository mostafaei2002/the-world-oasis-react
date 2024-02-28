import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Logged in successfully");
      console.log(user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
