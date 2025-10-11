import React from 'react';

const Resume = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Resume</h1>
        
        <iframe
          src='/RANAIVONIRINA_Thierry_Juliot.pdf'
          className='w-full h-screen mt-14'
          title='Resume'
        ></iframe>

        <a
          href='/RANAIVONIRINA_Thierry_Juliot.pdf'
          download
          className='block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded'
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
