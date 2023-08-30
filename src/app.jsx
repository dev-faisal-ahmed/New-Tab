import { twMerge } from "tailwind-merge";
import { Search } from "./components/search/search";
import { AddLink } from "./components/links/addLink";
import { AllLinks } from "./components/links/allLinks";
import { getLocalLinks, setLocalLinks } from "./utils/helper";
import { useEffect, useState } from "preact/hooks";

export function App() {
  const localLinks = getLocalLinks();
  const [allLinks, setAllLinks] = useState(localLinks);

  const onAddLink = (link) => {
    setLocalLinks([...allLinks, link]);
    setAllLinks([...allLinks, link]);
  };

  const onDeleteLink = (link) => {
    const updatedLinks = allLinks.filter(
      (linkData) => (link.title !== linkData.title) & (link.url !== linkData.url)
    );
    setLocalLinks(updatedLinks);
    setAllLinks(updatedLinks);
  };

  const onUpdateLink = (link, previousLink) => {
    const tempAllLinks = allLinks;
    let index;
    for (let i = 0; i < tempAllLinks.length; i++) {
      if (
        (tempAllLinks[i].title === previousLink.title) &
        (tempAllLinks[i].url === previousLink.url)
      ) {
        index = i;
        break;
      }
    }
    tempAllLinks[index] = link;
    setAllLinks(tempAllLinks);
    setLocalLinks(tempAllLinks);
  };

  useEffect(() => {
    setAllLinks(getLocalLinks());
  }, [onUpdateLink]);

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
        <div className="grid grid-cols-5 mt-8">
          <AllLinks allLinks={allLinks} onDeleteLink={onDeleteLink} onUpdateLink={onUpdateLink} />
          <AddLink onAddLink={onAddLink} />
        </div>
      </div>
    </section>
  );
}
