import { RiSearch2Line } from "react-icons/ri";
export function Search() {
  return (
    <div className="text-center">
      <h1 className="mb-5 text-4xl font-semibold text-white">Search UIX</h1>
      <form className="flex gap-4 rounded-md bg-gray-100 px-3 py-3 text-gray-500">
        <label htmlFor="search">
          <RiSearch2Line size={25} />
        </label>
        <input
          className="w-full bg-transparent outline-none placeholder:text-gray-500"
          type="text"
          id="search"
          placeholder="Search the web"
        />
      </form>
    </div>
  );
}
