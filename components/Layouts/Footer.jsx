import React from 'react'
import { FaMapMarkedAlt, FaEnvelope, FaUserTie, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border-t border-sky-900 px-4 pt-8 md:px-12 lg:px-16 relative bottom-0 left-0 right-0 overflow-hidden'>
            <div className='mt-8 max-w-7xl m-auto'>
                <p className='text-center text-gray-500 dark:text-gray-400 py-4'> © { new Date().getFullYear() } - All Rights Not Reserved</p>
            </div>
        </footer>
    )
}

export default Footer