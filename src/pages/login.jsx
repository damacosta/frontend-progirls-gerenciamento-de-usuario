import Image from "next/image";
import "../../src/globals.css";

export default function Login() {
  return (
    <main className="bg-gradient-to-r from-color-green via-color-white to-color-pink w-full h-screen flex flex-col items-center">
      <Image
        src="/Logo.png"
        alt="Logo Eco tye"
        width={120}
        height={120}
        className="m-10"
      />
      <div className="bg-color-lightest-green rounded-md flex flex-col items-center h-[60vh] w-1/3 p-8 justify-between">
        <div className="flex flex-col text-center">
          <h2 className="font-title text-4xl pb-6">Eco Tye</h2>
          <p className="text-color-light-gray text-sm">
            Gerenciador de Usuários
          </p>
        </div>
        <form action="" method="get" className="h-1/2 w-60 flex flex-col">
          <input
            type="text"
            className="h-10 w-70 border-x-2 border-t-2 border-color-light-gray"
          />
          <input
            type="text"
            className="h-10 w-70 border-2 border-color-light-gray"
          />
          <button
            type="submit"
            className="bg-color-black text-color-white h-10 w-70 mt-8"
          >
            Entrar
          </button>
        </form>
        <a
          href="./recovery"
          className="text-color-gray underline underline-offset-2"
        >
          Esqueceu a Senha?
        </a>
      </div>
    </main>
  );
}
