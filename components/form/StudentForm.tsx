'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';
import { FormProps } from '../component-type/FormProps';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  email: z.email({ message: 'Invalid email address!' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' }),
  firstName: z.string().min(1, { message: 'First name is required!' }),
  lastName: z.string().min(1, { message: 'Last name is required!' }),
  phone: z.string().min(1, { message: 'Phone is required!' }),
  address: z.string().min(1, { message: 'Address is required!' }),
  bloodType: z.string().min(1, { message: 'Blood Type is required!' }),
  birthday: z.date({ message: 'Birthday is required!' }),
  sex: z.enum(['male', 'female'], { message: 'Sex is required!' }),
  img: z.instanceof(File, { message: 'Image is required' }),
});

type Inputs = z.infer<typeof schema>;

export default function StudentForm({ type, data }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className='flex flex-col gap-4 w-xl' onSubmit={onSubmit}>
      <h1 className='text-xl font-semibold'>Create a new student</h1>
      <span className='text-xs text-gray-400 font-medium'>
        Authentication Information
      </span>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <InputField
          label='Username'
          name='username'
          defaultValue={data?.username}
          register={register}
          error={errors.username?.message}
        />
        <InputField
          label='Email'
          name='email'
          defaultValue={data?.email}
          register={register}
          error={errors.email?.message}
        />
        <InputField
          label='Password'
          name='password'
          type='password'
          defaultValue={data?.password}
          register={register}
          error={errors.password?.message}
        />
      </div>
      <span className='text-xs text-gray-400 font-medium'>
        Personal Information
      </span>
      <div className='flex flex-col md:flex-row flex-wrap gap-4 md:gap-x-8'>
        <InputField
          label='First Name'
          name='firstName'
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName?.message}
        />
        <InputField
          label='Last Name'
          name='lastName'
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName?.message}
        />
        <InputField
          label='Phone'
          name='phone'
          defaultValue={data?.phone}
          register={register}
          error={errors.phone?.message}
        />
        <InputField
          label='Address'
          name='address'
          defaultValue={data?.address}
          register={register}
          error={errors.address?.message}
        />
        <InputField
          label='Blood Type'
          name='bloodType'
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType?.message}
        />
        <InputField
          label='Birthday'
          name='birthday'
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday?.message}
          type='date'
        />
        <div className='flex flex-col gap-1 w-40'>
          <label className='text-xs text-gray-500'>Sex</label>
          <select
            {...register('sex')}
            className='ring-1 ring-blue-400 p-2 rounded-md text-sm w-full'
            defaultValue={data?.sex}
          >
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.sex?.message && (
            <p className='text-red-500 text-xs'>
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <InputField
          label='Image'
          name='img'
          type='file'
          register={register}
          defaultValue={data?.img}
          error={errors.img?.message?.toString()}
          accept='image/*'
          className='w-80'
        />
      </div>
      <button className='bg-blue-300 rounded-md p-2 capitalize font-semibold text-white'>
        {type}
      </button>
    </form>
  );
}
