import { Input, Select, Textarea } from "@headlessui/react";
import { ModalLayout } from "./Layouts";
import { useState } from "react";

export function RequestACall({ isOpen, handleModalStatus }: { isOpen: boolean; handleModalStatus: (e: boolean) => void }) {
    const intialData = {
        name: "",
        phoneNo: "",
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
        <ModalLayout isOpen={isOpen} handleModalStatus={handleModalStatus} ModalTitle={"Request a Call"} >

            <div className=" my-4">

                <div className="space-y-2 px-4">
                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='First Name/Last Name'
                        className='input'
                        name="name"
                    />

                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Phone Number'
                        className='input'
                        name="phoneNo"
                    />



                </div>

                <div className="border-t px-4  pt-4 mt-5 flex flex-col md:flex-row justify-end gap-3">
                    <button className='btn-primary' onClick={handleSubmit} >Send Message</button>
                    <a href={"tel:+2347010602957"} className="" >
                        <button className='btn-primary-outline'>  or call 07010602957</button>
                    </a>
                </div>

            </div>
        </ModalLayout>
    )
}

export function ReportACase({ isOpen, handleModalStatus }: { isOpen: boolean; handleModalStatus: (e: boolean) => void }) {
    const intialData = {
        name: "",
        phoneNo: "",
        email: "",
        address: "",
        caseTitle: "",
        message: ""
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
        <ModalLayout isOpen={isOpen} handleModalStatus={handleModalStatus} ModalTitle={"Report a Case"} >

            <div className=" my-4">

                <div className="space-y-2 px-4">
                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Your Name'
                        className='input'
                        name="name"
                    />

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 ">
                        <Input
                            onChange={(e) => handleChange(e)}
                            type='number'
                            placeholder='Phone Number'
                            className='input w-full'
                            name="phoneNo"
                        />
                        <Input
                            onChange={(e) => handleChange(e)}
                            type='email'
                            placeholder='Email Address'
                            className='input w-full'
                            name="email"
                        />
                    </div>

                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Home Address (if you want to   tell us)'
                        className='input'
                        name="address"
                    />

                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Case title'
                        className='input'
                        name="casetitle"
                    />

                    <Textarea
                        placeholder='Your Message'
                        rows={1}
                        className='input'
                        name="message"
                    />

                </div>

                <div className="border-t px-4  pt-4 mt-5 flex justify-end">
                    <button className='btn-primary' onClick={handleSubmit} >Send Message</button>
                </div>

            </div>
        </ModalLayout>
    )
}



export function ContactForm({ messageInputRef }) {
    const intialData = {
        name: "",
        phoneNo: "",
        email: "",
        gender: "",
        message: ""
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
        <div>
            <div className='grid grid-cols-1 grid-rows-5 gap-y-4 md:grid-cols-2 md:grid-rows-3 md:items-end md:gap-x-8 md:gap-y-6 lg:gap-x-10'>
                <div>
                    <Input
                        onChange={(e) => handleChange(e)}
                        ref={messageInputRef}
                        type='text'
                        placeholder='First Name / Last Name'
                        className='input '
                        name="name"
                    />
                </div>
                <div>
                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Email'
                        className='input '
                        name='email'
                    />
                </div>
                <div>
                    <Input
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Phone Number'
                        className='input'
                        name="phoneNo"
                    />
                </div>
                <div>
                    <Select
                        aria-label='Select your Gender'
                        className='input '
                        name="gender"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value=''>Gender</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                        <option value='Others'>Others</option>
                    </Select>
                </div>
                <div className='md:col-span-2'>
                    <Textarea
                        placeholder='Your Message'
                        rows={1}
                        className='input'
                        name="message"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className='mt-4 md:mt-6'>
                <button className='btn-primary' onClick={handleSubmit} >Send Message</button>
            </div>
        </div>
    )
}

