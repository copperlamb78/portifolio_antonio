import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import foto from "../../assets/images.png";

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
      <div className="p-10 mt-10">
        <h1 className="font-sono text-left text-2xl sm:text-4xl text-[#3B2A23]">
          Hi! i am
        </h1>
        <h1 className="font-sono text-2xl sm:text-4xl text-[#5A1F1B]">
          {displayText}
          <span className="animate-pulse duration-75">|</span>
        </h1>
      </div>
      <div className="justify-items-center">
        <img className="h-60 w-60 sm:h-80 sm:w-80 rounded-full" src={foto} />
      </div>
    </div>
  );
}
