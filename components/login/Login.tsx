import React from "react";

interface login {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<login> = ({ setShowLogin }) => {
  const onClose = (e: any) => {
    e.preventDefault();
    setShowLogin(false);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.70)" }}
      ></div>
      <div className="fixed z-10  rounded-lg bg-[rgb(220,163,6)]  block max-w-md p-10 translate-x-96 translate-y-20 max-sm:translate-x-9 ">
        <form className="flex text-center">
          <section className="flex flex-col gap-5 p-3">
            <section className="flex max-lg:flex-col justify-between gap-1 ">
              <label className="text-lg font-semibold" htmlFor="">
                Nombre:{" "}
              </label>
              <input
                placeholder="elixir cars"
                className="p-1 outline-none rounded-lg"
                type="text"
              />
            </section>
            <section className="flex max-lg:flex-col justify-between ">
              <label className="text-lg font-semibold" htmlFor="">
                Email:{" "}
              </label>
              <input
                placeholder="example@gmail.com"
                className="p-1 outline-none rounded-lg"
                type="text"
              />
            </section>
            <section className="flex max-lg:flex-col justify-between ">
              <label className="text-lg font-semibold" htmlFor="">
                Contraseña:{" "}
              </label>
              <input
                placeholder="********"
                className="p-1 outline-none rounded-lg"
                type="text"
              />
            </section>
            <section className="">
              <section className="flex justify-center gap-2">
                <button className="bg-gray-200 mb-2 p-1 px-4 rounded-lg hover:bg-gray-300">
                  Registrarse
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-200 mb-2 p-1 px-4 rounded-lg hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </section>
              <h1>Registrarse con:</h1>
              <button className="bg-gray-200 p-1 px-4 w-12 rounded-lg hover:bg-gray-300">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/720/720255.png"
                  alt=""
                />
              </button>
            </section>
          </section>
        </form>
      </div>
    </>
  );
};

export default Login;
