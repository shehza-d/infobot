import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

interface IProps {
  id: string;
  placeholder: string;
  type?: "text" | "number" | "email" | "date" | "tel";
  required?: boolean;
  onChange?: any;
  value?: any;
}

export default function Input(Props: IProps) {
  const { id, type, placeholder, required, onChange, value } = Props;

  const isError = false;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm capitalize font-medium leading-6 text-gray-900"
      >
        {placeholder}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type || "text"}
          name={id}
          id={id}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            isError
              ? "ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              : "ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
          } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          onChange={onChange}
          value={value}
        />
        {isError && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {isError && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          Not a valid email address.
        </p>
      )}
    </div>
  );
}
