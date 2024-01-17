import Cabecalho from "./cabecalho";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main className="limitador">{children}</main>
    </>
  );
}
