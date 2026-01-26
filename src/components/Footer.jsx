import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-4 pt-12 mt-12'>
        <p className='textsm text-muted-foreground font-medium'>
            &copy;   {new Date().getFullYear()} Manuel, All rights reserved 
        </p>
    </footer>
  )
}

export default Footer