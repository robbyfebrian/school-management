'use client';

import { useForm } from 'react-hook-form';
import { FormProps } from '../component-type/FormProps';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '../InputField';

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

export default function TeacherForm({ type, data }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className='flex flex-col gap-4 w-xl' onSubmit={onSubmit}>
      <h1 className='font-semibold text-xl'>Create New Teacher</h1>
      <span className='text-gray-400 text-sm'>Authentication Details</span>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <InputField
          label='Username'
          name='username'
          register={register}
          defaultValue={data?.username}
          error={errors.username?.message?.toString()}
        />
        <InputField
          label='Email'
          name='email'
          type='email'
          register={register}
          defaultValue={data?.email}
          error={errors.email?.message?.toString()}
        />
        <InputField
          label='Password'
          name='password'
          type='password'
          register={register}
          defaultValue={data?.password}
          error={errors.password?.message?.toString()}
        />
      </div>
      <span className='text-gray-400 text-sm'>Personal Details</span>
      <div className='flex flex-col md:flex-row flex-wrap gap-4 md:gap-x-8'>
        <InputField
          label='First Name'
          name='firstName'
          register={register}
          defaultValue={data?.firstName}
          error={errors.firstName?.message?.toString()}
        />
        <InputField
          label='Last Name'
          name='lastName'
          register={register}
          defaultValue={data?.lastName}
          error={errors.lastName?.message?.toString()}
        />
        <InputField
          label='Phone'
          name='phone'
          register={register}
          defaultValue={data?.phone}
          error={errors.phone?.message?.toString()}
        />
        <InputField
          label='Address'
          name='address'
          register={register}
          defaultValue={data?.address}
          error={errors.address?.message?.toString()}
        />
        <InputField
          label='Blood Type'
          name='bloodType'
          register={register}
          defaultValue={data?.bloodType}
          error={errors.bloodType?.message?.toString()}
        />
        <InputField
          label='Birthday'
          name='birthday'
          type='date'
          register={register}
          defaultValue={data?.birthday}
          error={errors.birthday?.message?.toString()}
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
