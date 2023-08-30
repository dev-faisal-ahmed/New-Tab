import { twMerge } from "tailwind-merge";
import { Input } from "../input";
import { getFaviconUrl } from "../../utils/helper";

export function LinkForm({ onAddLink, setModalSate, title, url, add, update, onUpdateLink }) {
  const handleAddLink = (e) => {
    e.preventDefault();
    const target = e.target;
    const newTitle = target.title.value;
    const newUrl = target.url.value;
    const favIconUrl = getFaviconUrl(newUrl);

    if (add) {
      onAddLink({ title: newTitle, url: newUrl, favIconUrl });
    } else if (update) {
      onUpdateLink({ title: newTitle, url: newUrl, favIconUrl }, { title, url });
    }
    setModalSate(false);
  };

  return (
    <form onSubmit={handleAddLink} className="flex flex-col gap-5">
      <Input
        title="Name"
        placeholder="Enter the name of site"
        name="title"
        defaultValue={title}
        required
      />
      <Input
        title="URL"
        placeholder="Enter the url of the site"
        name="url"
        defaultValue={url}
        required
      />
      <div className="ml-auto grid w-fit grid-cols-2 gap-5">
        <p
          onClick={() => setModalSate(false)}
          className={twMerge(
            "button cursor-pointer rounded border border-gray-400 text-blue-300 hover:bg-gray-700"
          )}
        >
          Cancel
        </p>

        <button className={twMerge(`button bg-blue-400`)}>
          {add && "Add"}
          {update && "Edit"}
        </button>
      </div>
    </form>
  );
}
