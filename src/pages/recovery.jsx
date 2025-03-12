import Image from "next/image";
import "../../src/globals.css";

export default function Recovery() {
  return (
    <main className="bg-gradient-to-r from-color-green via-color-white to-color-pink w-full h-screen flex flex-col items-center">
      <a href="./login">Voltar</a>
      <img src="" alt="" />
      <div className="bg-color-lightest-green">
        <h2>Eco Tye</h2>
        <p>Gerenciador de Funcionários</p>
        <h3>Redefinição de Senha</h3>
        <form action="" method="get">
          <input type="text" />
          <input type="text" />
          <button type="submit">Redefinir Senha</button>
        </form>
        <p>Sua senha temporária será enviada para o E-mail cadastrado.</p>
      </div>
    </main>
  );
}
