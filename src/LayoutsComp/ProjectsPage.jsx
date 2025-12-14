import React from 'react'
import { featured } from '../featured'

const ProjectsPage = () => {
  return (
  <section className='bg-[#0A0A0A] text-white mt-24 min-h-screen'>
    <div>
      <div className='ps-8 lg:ps-24 mb-16'>
        <h1 className='beba-text text-4xl'>Featured Projects</h1>
        <p className='text-[#c7c7c7] leading-relaxed manrope-text max-w-lg'>Here are some of the selected projects that showcase my passion for front-end development.</p>
      </div>
    </div>






    {/* Projects */}



<div className='lg:ps-24 ps-8 manrope-text' >
    {featured.map((featured) => (
      <div className='grid grid-cols-2 rounded-2xl mb-4 gap-23
      '>
        
        <div className='bg-[#1a1a1a] rounded-2xl p-5 h-100 flex flex-col justify-between text-end'>
         
          <img src={featured.image} alt={featured.title} className='w-300 h-auto object-contain self-center rounded-2xl mt-12'/>

          <h2 className='self-end mt-2 bg-[#0a0a0a] p-1 px-3 rounded-2xl'>{featured.tag}</h2>
        </div>

        <div>
          <h1 className='text-2xl mb-3'>{featured.title}</h1>

            <p className='text-[#c7c7c7c7] mb-7'>{featured.description} </p>

            <h3 className='uppercase  border-b border-b-[#484848] pb-4 mb-3'>Project Info</h3>

            <div className='flex justify-between border-b border-b-[#484848] pb-4 mb-3'>
              <h4>Year</h4>
              <h4 className='self-end'>{featured.year}</h4>
            </div>

            <div className='flex justify-between pb-4 mb-3'>
              <h4>Role</h4>
              <h4 className='self-end'>{featured.role}</h4>
            </div>


            <div>
              <a href="">Live Demo </a>
              <a href=""></a>
            </div>
        </div>
      </div>
    ))}

      
    
</div>



   


 
        

  </section>
  )
}

export default ProjectsPage