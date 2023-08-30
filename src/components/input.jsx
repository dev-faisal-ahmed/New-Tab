export function Input({ name, placeholder, defaultValue, required, title }) {
  return (
    <div className="flex flex-col-reverse">
      <input
        className="peer border-b-2 border-transparent bg-black-700 p-2 text-sm text-white outline-none placeholder:text-sm focus:border-blue-300"
        placeholder={placeholder}
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
      />
      <label className="mb-2 text-sm text-gray-400 peer-focus:text-blue-300" htmlFor={name}>
        {title}
      </label>
    </div>
  );
}
