import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const useAuthCalls = () => {
  const router = useRouter();
  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      await createUserWithEmailAndPassword(auth, email, password);
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastSuccessNotify("Registered successfully!");
      router.push("/login");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  return { createUser };
};

export default useAuthCalls;
