'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../globals.css";
import Link from 'next/link';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido. Digite um email válido.");
      return;
    }

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      console.log("Resposta do servidor:", response);

    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("Login bem-sucedido!");
      router.push("/admin");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError(err.response?.data?.message || "Erro ao fazer login");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
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
          {error && <p className="text-sm mb-2">{error}</p>}
          <p className="text-color-light-gray text-sm">
            Gerenciador de Usuários
          </p>
        </div>

        <form  onSubmit={handleSubmit} className="h-1/2 w-60 flex flex-col">

        <label className="text-color-gray">Usuário</label>
          <input
            type="text" placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            required
            className="h-10 w-70 border-2 border-color-light-gray rounded-md pl-2"
          />

          <label className="text-color-gray">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            className="h-10 w-70 border-2 border-color-light-gray rounded-md pl-2"
          />

          <button
            type="submit"
            className="bg-color-black text-color-white h-10 w-70 mt-8 rounded-md">
            Entrar
          </button>

        </form>

        <Link
          href="./recovery"
          className="text-color-gray underline underline-offset-2"
        >
          Esqueceu a Senha?
        </Link>

      </div>
    </main>
  );
}
