"use client"
import { Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Filter() {

    // const [limit, setLimit] = useState()
    const navigate = useRouter()

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        navigate.push(`/?limit=${value}`)
    }

    return (

        <div className='mb-10'>
            <Select defaultValue={10} onChange={handleChange}>
                <Option value="10">10</Option>
                <Option value="20">20</Option>
                <Option value="30">30</Option>
            </Select>
        </div>
    )
}
