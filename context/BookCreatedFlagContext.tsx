import { createContext } from "react";

export interface ToastState{
    message: string,
    type: "success" | "error" | "";
}
interface BookCreatedFlagContextType {
  toast: ToastState;
  setToast: React.Dispatch<React.SetStateAction<ToastState>>;
}

export const BookCreatedFlagContext = createContext<BookCreatedFlagContextType>({
   toast: { message: "", type: "" },
  setToast: () => {},
});