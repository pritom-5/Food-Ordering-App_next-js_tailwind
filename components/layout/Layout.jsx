import Loaidng from "../ui/Loading";
import Footer from "./Footer";
import Head from "./Head";

export default function Layout({ children }) {
  return (
    // set height equal to full view port height
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <Head />
      <Loaidng />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
