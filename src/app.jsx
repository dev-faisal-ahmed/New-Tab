import { twMerge } from "tailwind-merge";
import { Search } from "./components/search/search";
import { AddLink } from "./components/links/addLink";
import { AllLinks } from "./components/links/allLinks";
import { getLocalLinks, setLocalLinks } from "./utils/helper";
import { useState } from "preact/hooks";

export function App() {
  const localLinks = getLocalLinks();
  const [allLinks, setAllLinks] = useState(localLinks);

  const onAddLink = (link) => {
    if (!allLinks) {
      setLocalLinks([link]);
      setAllLinks([link]);
      return;
    }
    setLocalLinks([...allLinks, link]);
    setAllLinks([...allLinks, link]);
  };

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
        <div className="grid grid-cols-5 gap-5 mt-5">
          <AllLinks />
          <AddLink onAddLink={onAddLink} />
        </div>
      </div>
    </section>
  );
}
