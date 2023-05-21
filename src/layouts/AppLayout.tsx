import { Roboto_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import MainLayout from "./MainLayout";

interface AppLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  useEffect(() => {
    if (pathname === "/") {
      router.push("/presentation");
    }
  }, [pathname]);

  return (
    <div className={`flex flex-col max-w-[1440px] m-auto ${roboto.className}`}>
      <Header />
      <div className="w-full flex">
        {pathname === "/profil" ? null : <Aside />}
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
}
