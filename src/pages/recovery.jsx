import Image from "next/image";
import "../../src/globals.css";

export default function Recovery() {
  return (
    <main className="bg-gradient-to-r from-color-green via-color-white to-color-pink w-full h-screen flex flex-col items-center">
      <a
        href="./login"
        className="p-6 text-color-white w-screen underline underline-offset-1 font-bold text-xl"
      >
        Voltar
      </a>
      <Image
        src="/Logo.png"
        alt="Logo Eco tye"
        width={120}
        height={120}
        className="mx-10 mb-6"
      />
      <div className="bg-color-lightest-green rounded-md flex flex-col items-center h-[60vh] w-1/3 justify-between p-8">
        <div className="flex flex-col text-center">
          <h2 className="font-title text-4xl pb-6">Eco Tye</h2>
          <p className="text-color-light-gray text-sm">
            Gerenciador de Usuários
          </p>
          <p className="text-lg">Redefinição de Senha</p>
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
            Redefinir Senha
          </button>
        </form>
        <p>Sua senha temporária será enviada para o E-mail cadastrado.</p>
      </div>
    </main>
  );
}
