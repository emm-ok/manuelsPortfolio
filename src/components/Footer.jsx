import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-8 py-12 px-4 relative shadow-md rounded-full mt-12 pt-8 flex flex-wrap justify-center items-center'>
        <p className='textsm text-muted-foreground font-medium'>
            &copy;   {new Date().getFullYear()} Manuel, All rights reserved 
        </p>
    </footer>
  )
}

export default Footer