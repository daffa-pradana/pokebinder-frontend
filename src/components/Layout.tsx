import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`min-h-screen w-full flex justify-center bg-[#F6F8FC]`}>
      <main
        className={`
          w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 
          ${className || ""}
        `}
      >
        {children}
      </main>
    </div>
  );
}
