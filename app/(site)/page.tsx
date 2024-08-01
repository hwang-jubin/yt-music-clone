import { sleep } from '@/lib/utils'
import React from 'react'
import Category from "./components/Category.jsx"

const page = async () => {


    return (
        <div className='min-h-[600px]'>
            <div className='mt-9'>
                <Category />
            </div>
        </div>
    )
}

export default page
