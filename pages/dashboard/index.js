import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Navbar/ClientSidebar'
import Profile from '@/components/Profile/Profile'
import RequestPage from '@/components/Profile/Request'

import { useContext, useState } from 'react'
import AuthContext from '@/store/AuthContext'
import ProtectedRoute from '@/hoc/ProtectedRoute'
import Gifts from '@/components/Profile/Gifts'

const inter = Inter({ subsets: ['latin'] })

function Home() {
    const [selectedBullet, setSelectedBullet] = useState('profile')

    const updateBullet = bulletName => {
        setSelectedBullet(bulletName)
    }
    const authCtx = useContext(AuthContext)
    console.log(authCtx.userData)
    authCtx.stopLoading()

    return (
        <>
            <Navbar />
            <Sidebar onUpdateBullet={updateBullet} />
            {selectedBullet === 'profile' && <Profile />}
            {selectedBullet === 'request' && <RequestPage />}
            <Gifts />
        </>
    )
}
export default ProtectedRoute(Home)
