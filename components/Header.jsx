import React from 'react'
import Image from 'next/image'

const Header = ({children}) => {
  return (
    // absolute는 relative 위에 겹쳐서 올라가게 됨
    <header className='relative overflow-y-auto w-full h-full'>
      <section className='absolute top-0 w-full'>
        {/* relative, fill로 화면 꽉 차게 할 수 있음 */}
        <div className='relative h-[400px] w-full '>
            {/* object cover 사진 비율 유지(잘릴 수 있음 alt=이미지 대체 string) */}
            <Image alt="mediaItem" className="object-cover" fill src="https://images.unsplash.com/photo-1707833558984-3293e794031c" />
            <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
            <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black w-full'></div>
        </div>
      </section>
      <section className='absolute'>{children}</section>
    </header>
  )
}

export default Header
