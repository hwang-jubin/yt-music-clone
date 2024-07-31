import React from 'react'

//기본값으로 빈 함수를 전달해서 함수가 없는(null)인 경우에 오류가 나지 않게 함
const IconButton = ({icon,onClickIcon=()=>{}}) => {
  return (
    <div>
      <div onClick = {onClickIcon} className="flex justify-center items-center w-[36px] h-[36px]
       hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer ">
        {icon}
      </div>
    </div>
  )
}

export default IconButton
