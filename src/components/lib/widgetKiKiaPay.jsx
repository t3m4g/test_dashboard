import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";

export default function WidgetKiKiaPay({ img }) {
  //const { openKkiapayWidget } = useKKiaPay();
  const { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } =
    useKKiaPay();
  // ..... others components options
  function successHandler(response) {
    console.log(response);
  }

  function failureHandler(error) {
    console.log(error);
  }

  const open = () => {
    console.log(import.meta.env.VITE_API_KEY);
    openKkiapayWidget({
      amount: 4000,
      api_key: import.meta.env.VITE_API_KEY,
      sandbox: true,
      email: import.meta.env.VITE_EMAIL,
      phone: import.meta.env.VITE_PHONE,
    });
  };

  useEffect(() => {
    addKkiapayListener("success", successHandler);
    addKkiapayListener("failed", failureHandler);

    return () => {
      removeKkiapayListener("success", successHandler);
      removeKkiapayListener("failed", failureHandler);
    };
  }, [addKkiapayListener, removeKkiapayListener]);

  return (
    <button
          onClick={ open }
    >
        <img src={img} alt="la photo des momo" className="-translate-x-48 px-12 py-3 border-stone-400 rounded-lg border-3 " />
    </button>
  );
  return <button onClick={open}>click me</button>;
}
