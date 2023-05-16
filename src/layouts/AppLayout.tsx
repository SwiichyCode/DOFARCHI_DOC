import { Roboto_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import MainLayout from "./MainLayout";

interface AppLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function AppLayout({ children }: AppLayoutProps) {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      router.push("/presentation");
    }
  }, [pathname]);

  // useEffect(() => {
  //   fetch("https://dofapi.onrender.com/api/archimonstres", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(setData);
  // }, []);

  // console.log(data);

  return (
    <div className={`flex  max-w-[1440px] flex-col m-auto ${roboto.className}`}>
      <Header />
      <div className="w-full flex">
        <Aside />
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
}
