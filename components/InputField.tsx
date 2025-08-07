import { InputFieldProps } from './component-type/InputFieldProps';

export default function InputField({
  label,
  type = 'text',
  error,
  register,
  name,
  defaultValue,
  className = '',
  ...props
}: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-1 w-40 ${className}`}>
      <label className='text-xs text-gray-500'>{label}</label>
      <input
        type={type}
        {...(register ? register(name) : {})}
        className='ring-1 ring-blue-400 p-2 rounded-md text-sm'
        {...props}
      />
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  );
}
