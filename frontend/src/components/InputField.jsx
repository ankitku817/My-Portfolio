import React from 'react';

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  textarea = false,
}) => {
  const commonClasses = `w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500 
    ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
    dark:bg-gray-900 dark:text-gray-100`;

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          name={name}
          id={name}
          rows="5"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonClasses}
        />
      )}

      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
