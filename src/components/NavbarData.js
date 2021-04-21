import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    
    {
        title: 'Task Manager',
        path: '/taskmanager',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
   
]