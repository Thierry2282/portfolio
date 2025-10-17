import React from 'react';
import '../i18n'; // Ensure i18n is initialized
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>{t('pages.resume.title')}</h1>
        
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
          {t('pages.resume.download')}
        </a>
      </div>
    </section>
  );
};

export default Resume;
