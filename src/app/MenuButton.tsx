'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'
import React from 'react';

interface MenuButtonProps {
    name: string
    icon?: React.ReactNode
}

const MenuButton = (props: MenuButtonProps) => {
    const pathname = usePathname();
    const href = `/${props.name.toLowerCase()}`;
    const current = pathname === href;
    
    return (
        <Link href={href}
            className={`h-full flex-1 flex justify-center items-center rounded-2xl hover:bg-slate-300`}>
            {/* className="h-full flex justify-center items-center bg-gray-500 border-black border-2 w-2/12 shadow-2xl"> */}
            <div className={`flex items-center gap-2 text-2xl ${current?"shadow-[inset_0_-2px_0_0_rgb(0,0,0)]":""}`}>

                <div className='hidden lg:block text-3xl'>
                    {props.icon && props.icon}
                </div>

                <span className='ml-[-4px]'>{props.name}</span>
            </div>
        </Link>
    );
};

export default MenuButton;