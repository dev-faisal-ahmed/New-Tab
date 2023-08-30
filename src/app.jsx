import { twMerge } from "tailwind-merge";
import { Search } from "./components/search";

export function App() {
  return (
    <section
      style={{
        backgroundImage: `url(/images/bg-min.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={twMerge("center-xy h-screen")}
    >
      <div className="w-full max-w-[600px]">
        <Search />
      </div>
    </section>
  );
}
