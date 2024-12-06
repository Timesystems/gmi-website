"use client"
import React, { useState } from 'react'
import { ModalLayout } from './Layouts'
import { VolunteersBanner, VolunteersForm } from './Volunteer'
import { IoClose } from "react-icons/io5";

export function VolunterModal() {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = (e) => {
        setIsOpen(e)
    }
    return (

        <>
            <button
                // href='#'
                className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
                onClick={() => handleToggle(true)}
            >
                Sign Up Now
            </button>
            <ModalLayout isOpen={isOpen} handleModalStatus={(e) => handleToggle(e)} modalSize={"max-w-[80rem]"} classname='rounded-[1.25rem] overflow-x-hidden' >
                <div className='flex item-center' >
                    {/* col one */}
                    <div className="hidden md:block w-full max-w-[36.25rem] relative min-h-full volunterBg ">
                        <VolunteersBanner position='left-1/2 -translate-x-1/2 bottom-10' />
                    </div>

                    {/* col 2 */}
                    <div className="w-full px-5 py-10 md:px-20 md:py-20 relative">
                        {/* close Button */}
                        <button className="absolute md:right-10 right-5 md:top-10 top-5 w-7  h-7 md:w-11 md:h-11 bg-primary-50 rounded-full flex items-center justify-center" onClick={() => handleToggle(false)}>
                            <IoClose className=" text-base md:text-[1.25rem]" />
                        </button>

                        {/* title section */}

                        <div className="">
                            <p className="text-primary-500 text-base">
                                Volunteer
                            </p>
                            <h3 className="sm:text-[1.5rem] md:text-[2.5rem] font-semibold">
                                Sign Up to Become a Volunteer
                            </h3>
                        </div>

                        <div className=" mt-5 md:mt-10">
                            <VolunteersForm />
                        </div>

                    </div>
                </div>
            </ModalLayout>
        </>
    )
}

