import React from 'react'
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';

const page = () => {
  return (
    <div className='bg-blue-950 min-h-screen text-white'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default page
