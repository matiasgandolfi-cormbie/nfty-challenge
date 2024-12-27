'use client'
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';

const NavbarContainer = () => {

    const { data: session, status } = useSession();

    return (
        <Navbar session={session}/>
    );
};

export default NavbarContainer;
