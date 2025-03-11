export const metadata = {
  title: "Eco Tye",
  description: "Gerenciador de Usuários",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
