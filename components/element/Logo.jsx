"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton"

const Logo = () => {

  //import 주의
  //push 함수
  const {push} =useRouter();

  const onClickLogo=()=>{
    //home 이동 로직
    push("/");

  }

  const onClickMenu=()=>{
    
  }

  return (
    <section className='flex flex-row items-center gap-3'>
      <IconButton icon={<RxHamburgerMenu size={24}/>} onClickIcon = {onClickMenu}/>
      <div className='cursor-pointer' onClick ={onClickLogo}>
        {/* alt = 이미지가 나오지 않았을 때 대체 할 문구 */}
        <Image alt="logo" width ={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  )
}

export default Logo
