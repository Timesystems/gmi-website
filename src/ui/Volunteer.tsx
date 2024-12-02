"use client"

import { nigeriaStates } from "@/data/site-data";
import { Input, Select } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export function VolunteersBanner({ position }: { position?: string; }) {
    const volunteerMembers = [
        { name: `Scott`, image: `/images/volunteers/image-1.png` },
        { name: `Olivia`, image: `/images/volunteers/image-2.png` },
        { name: `Jonah`, image: `/images/volunteers/image-3.png` },
        { name: `Ethan`, image: `/images/volunteers/image-4.png` },
        { name: `Clarke`, image: `/images/volunteers/image-5.png` },
        { name: `Kelly`, image: `/images/volunteers/image-6.png` },
    ];

    return (
        <div className={`absolute ${position ?? "bottom-[-40px] right-[-20px]"} rounded-2xl bg-white py-2 pl-4 pr-0 text-sm text-black-500 shadow-md md:right-[-40px] md:py-4`}>
            <span className='text-sm md:text-base'>
                Join 200+ Other Volunteers
            </span>
            <div className='mt-2'>
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
                        <Image
                            src={image}
                            alt=''
                            fill
                            className={clsx(`rounded-full`)}
                        />
                    </span>
                ))}
            </div>
        </div>
    )
}


export function VolunteersForm() {
    const intialData = {
        name: "",
        email: "",
        phoneNo: "",
        state: "",
        city: "",
        qualification: "",
        motivation: "",
        gender: ""
    }
    const [reportData, setReportData] = useState(intialData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setReportData({ ...reportData, [name]: value })
    }
    const handleSubmit = () => {
        console.log("handleChange", reportData)
    }
    return (
        <div className="space-y-5">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 ">
                <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    placeholder='First Name/Last Name'
                    className='input w-full'
                    name="name"
                />
                <Input
                    onChange={(e) => handleChange(e)}
                    type='email'
                    placeholder='Email'
                    className='input w-full'
                    name="email"
                />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 ">
                <Input
                    onChange={(e) => handleChange(e)}
                    type='number'
                    placeholder='Phone Number'
                    className='input w-full'
                    name="phoneNo"
                />

                <Select
                    aria-label='Select your Gender'
                    className='input w-full'
                    name="gender"
                    onChange={(e) => handleChange(e)}
                >
                    <option value=''>Gender</option>
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='Others'>Others</option>
                </Select>

            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 ">

                <Select
                    aria-label='Select your State'
                    className='input w-full'
                    name="state"
                    onChange={(e) => handleChange(e)}
                >
                    <option value=''>State of Residence</option>
                    {nigeriaStates?.map(({ id, value, name }) => {
                        return (
                            <option key={id} value={value}>{name}</option>

                        )
                    })}
                </Select>
                <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    placeholder='City or Residence'
                    className='input w-full'
                    name="city"
                />

            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 ">

                <Select
                    aria-label='Select your Qualification'
                    className='input w-full'
                    name="qualification"
                    onChange={(e) => handleChange(e)}
                >
                    <option value=''>Qualification</option>
                    {/* {qualifications?.map(({ id, value, name }) => {
                        return (
                            <option key={id} value={value}>{name}</option>

                        )
                    })} */}
                </Select>
                <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    placeholder='Motivation'
                    className='input w-full'
                    name="motivation"
                />

            </div>
            <div className="mt-10">
                <button className='btn-primary' onClick={handleSubmit} >Sign Up</button>
            </div>
        </div >
    )
} 