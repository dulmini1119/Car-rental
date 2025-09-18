import { useContext, useEffect } from "react";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

export default function ToastMsg() {
  const { toast, setToast } = useContext(BookCreatedFlagContext);

  useEffect(() => {
    if (toast.message) {
      const timer = setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  if (!toast.message) return null;

  return (
    <div className="toast toast-top toast-end">
      <div
        className={`alert ${
          toast.type === "success"
            ? "alert-success"
            : toast.type === "error"
            ? "alert-error"
            : ""
        }`}
      >
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
