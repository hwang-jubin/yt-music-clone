import React from 'react'
import Header from '@/components/Header'

interface childrenProps {
    children: React.ReactNode
}

const layout = ({ children }: childrenProps) => {
    return (
        <div className='w-full h-full'>
            <Header >
                {children}
            </Header>
        </div>
    )
}

export default layout
