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
      <div className="bg-color-lightest-green rounded-md flex flex-col items-center h-[60vh] w-1/3 py-10 justify-evenly">
        <h2 className="font-title text-4xl">Eco Tye</h2>
        <p className="text-color-light-gray">Gerenciador de Usuários</p>
        <form
          action=""
          method="get"
          className="h-1/3 w-60 flex flex-col justify-evenly "
        >
          <input type="text" className="h-10 w-70" />
          <input type="text" className="h-10 w-70" />
          <button
            type="submit"
            className="bg-color-black text-color-white h-10 w-70"
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
