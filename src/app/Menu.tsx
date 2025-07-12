import React from 'react'
import MenuButton from './MenuButton'
import Link from 'next/link'


import { PiReadCvLogo } from "react-icons/pi";
import { IoLogoReact } from "react-icons/io5";
import { TbSandbox } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

export default function Menu() {
  return (
    <div className="w-full h-16 flex flex-row justify-between bg-slate-400 px-3 py-1.5 rounded-3xl">

        <Link
            className='w-12 text-5xl flex justify-start items-center hover:text-gray-200'
            href={`/`} >
              <CgProfile />
        </Link>


        <nav className="h-full flex flex-1 justify-around px-4">
            <MenuButton name='CV' icon={<PiReadCvLogo style={{strokeWidth: 4}}/>} />
            <MenuButton name='Projects' icon={<IoLogoReact style={{strokeWidth: 12, marginTop:"4px"}}/>} />
            <MenuButton name='Sandbox' icon={<TbSandbox style={{marginTop:"4px"}}/>}/> 
            <MenuButton name='Notes' icon={<LuNotebookPen style={{marginTop:"4px"}}/>}/>
            <MenuButton name='Dashboard' icon={<MdOutlineSpaceDashboard style={{marginTop:"4px"}}/>}/>
        </nav>

        <div className="w-32 flex justify-between items-center pr-2 text-3xl">
            <FaGithub className='hover:text-gray-200'/>
            <FaLinkedin className='hover:text-gray-200'/>
            <SiGmail className='hover:text-gray-200'/>
        </div>
    </div>
  )
}
