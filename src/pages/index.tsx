import { Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <></>
    // <main
    //   className={`flex min-h-screen max-w-[1440px] flex-col m-auto ${roboto.className}`}
    // >
    //   <Header />
    //   <div className="w-full min-h-screen flex">
    //     <Aside />
    //     <Main />
    //   </div>
    // </main>
  );
}
