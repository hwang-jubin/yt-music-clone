import { sleep } from '@/lib/utils'
import React from 'react'
import Category from "./components/Category.jsx"
import PagePadding from '@/components/PagePadding.jsx'
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from '@/lib/dummyData.js'
import UserIcon from '@/components/UserIcon.jsx'

const page = async () => {
    const dummyPlayListArray1 = [...dummyPlaylistArray];

    return (
        <PagePadding>
        <div className='min-h-[600px]'>
            <div className='mt-9'>
                <Category />
            </div>
            <div className='"mt-12'>
                {/* carousel*/}
                <PlayListCarousel 
                 playListArrary={[...dummyPlayListArray1]}
                 Thumbnail={<div className='w-[56px] h-[56px]'>
                    <UserIcon size={"lg"}/>
                 </div> }
                 title="다시듣기"
                 subTitle="도도"
                 />
            </div>
        </div>
        </PagePadding>
    )
}

export default page
