import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import foto from "../../assets/minhaFoto.jpeg";

export function Home() {
  const text = "Antonio Gabriel";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(
      () => {
        if (!isDeleting) {
          // digitando
          setDisplayText((prev) => {
            index = prev.length;
            const next = text.slice(0, index + 1);

            if (next === text) {
              setTimeout(() => setIsDeleting(true), 1000);
            }

            return next;
          });
        } else {
          // apagando
          setDisplayText((prev) => {
            const next = prev.slice(0, -1);

            if (next.length === 0) {
              setIsDeleting(false);
            }

            return next;
          });
        }
      },
      isDeleting ? 60 : 120,
    );

    return () => clearInterval(timer);
  }, [isDeleting, text]);

  return (
    <div className="bg-[#C8A96A] h-screen">
      <Navbar />
      <div className="p-10 mt-10 flex flex-col md:flex-row lg:p-20">
        <div className="w-full m-auto font-sono text-left text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
          <h1 className="text-[#3B2A23]">Hi! i am</h1>
          <h1 className="text-[#5A1F1B]">
            {displayText}
            <span className="animate-pulse duration-75">|</span>
          </h1>
        </div>
        <div className="w-full justify-items-center lg:justify-items-end">
          <img
            className="h-60 w-60 mt-15 md:mt-0 sm:h-80 sm:w-80 lg:w-100 lg:h-100 rounded-full object-cover"
            src={foto}
          />
        </div>
      </div>
    </div>
  );
}
