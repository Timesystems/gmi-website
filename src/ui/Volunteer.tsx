'use client';

import { nigeriaStates } from '@/data/site-data';
import { postRequest } from '@/lib/api/apiHelper';
import { Input, Select } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { professions } from '@/data/site-data';

export function VolunteersBanner({ position }: { position?: string }) {
  const volunteerMembers = [
    { name: `Scott`, image: `/images/volunteers/image-1.png` },
    { name: `Olivia`, image: `/images/volunteers/image-2.png` },
    { name: `Jonah`, image: `/images/volunteers/image-3.png` },
    { name: `Ethan`, image: `/images/volunteers/image-4.png` },
    { name: `Clarke`, image: `/images/volunteers/image-5.png` },
    { name: `Kelly`, image: `/images/volunteers/image-6.png` },
  ];

  return (
    <div
      className={`absolute ${position ?? 'bottom-[-40px] right-[-20px]'} rounded-2xl bg-white py-2 pl-4 pr-0 text-sm text-black-500 shadow-md md:right-[-40px] md:py-4`}
    >
      <span className='text-sm md:text-base'>Join 200+ Other Volunteers</span>
      <div className='mt-2 max-h-[46px] overflow-hidden'>
        {volunteerMembers?.map(({ name, image }, index) => (
          <span
            key={`volunteer ${name}`}
            className={clsx(
              `relative inline-block h-[46px] w-[46px] rounded-full border-[2px] border-white bg-cover bg-center bg-no-repeat md:h-[48px] md:w-[48px]`,
              {
                'left-[-10px]': index == 1,
                'left-[-20px]': index == 2,
                'left-[-30px]': index == 3,
                'left-[-40px]': index == 4,
                'left-[-50px]': index == 5,
              }
            )}
          >
            <Image src={image} alt='' fill className={clsx(`rounded-full`)} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function VolunteersForm({ handleToggle }: { handleToggle: unknown }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const intialData = {
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    profession: '',
    message: '',
    gender: '',
  };
  const [reportData, setReportData] = useState(intialData);
  const { name, email, phone, state, city, profession, message, gender } =
    reportData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    const isFormValid = ['name', 'phone', 'email', 'city', 'message'].every(
      (field) => !!reportData[field]
    );
    if (!isFormValid) return;

    const payload = {
      type: 'volunteer',
      data: reportData,
    };
    try {
      const response = await postRequest('/api/form-submission', payload);
      setReportData(intialData);
      handleToggle(false);
      toast.success(response?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className='space-y-5 overflow-hidden' onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-4 md:flex-row md:gap-5'>
        <Input
          onChange={(e) => handleChange(e)}
          type='text'
          placeholder='First Name/Last Name'
          className='input w-full'
          name='name'
          value={name}
        />
        <Input
          onChange={(e) => handleChange(e)}
          type='email'
          placeholder='Email'
          className='input w-full'
          name='email'
          value={email}
        />
      </div>

      <div className='flex flex-col items-center gap-4 md:flex-row md:gap-5'>
        <Input
          onChange={(e) => handleChange(e)}
          type='number'
          placeholder='Phone Number'
          className='input w-full'
          name='phone'
          value={phone}
        />

        <Select
          aria-label='Select your Gender'
          className='input w-full'
          name='gender'
          value={gender}
          onChange={(e) => handleChange(e)}
        >
          <option value=''>Gender</option>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
          <option value='Others'>Others</option>
        </Select>
      </div>

      <div className='flex flex-col items-center gap-4 md:flex-row md:gap-5'>
        <Select
          aria-label='Select your State'
          className='input w-full'
          name='state'
          value={state}
          onChange={(e) => handleChange(e)}
        >
          <option value=''>State of Residence</option>
          {nigeriaStates?.map(({ id, value, name }) => {
            return (
              <option key={id} value={value}>
                {name}
              </option>
            );
          })}
        </Select>
        <Input
          onChange={(e) => handleChange(e)}
          type='text'
          placeholder='City or Residence'
          className='input w-full'
          name='city'
          value={city}
        />
      </div>

      <div className='flex flex-col items-center gap-4 md:flex-row md:gap-5'>
        <Select
          aria-label='Select your Qualification'
          className='input w-full'
          name='profession'
          value={profession}
          onChange={(e) => handleChange(e)}
        >
          <option value=''>Qualification</option>
          {professions.map(({ label, value }, id) => {
            return (
              <option key={`${value}-${id}`} value={value}>
                {label}
              </option>
            );
          })}
        </Select>
        <Input
          onChange={(e) => handleChange(e)}
          type='text'
          placeholder='Motivation'
          className='input w-full'
          name='message'
          value={message}
        />
      </div>
      <div className='mt-10'>
        <button type='submit' className='btn-primary' disabled={isLoading}>
          Sign Up
        </button>
      </div>
    </form>
  );
}
