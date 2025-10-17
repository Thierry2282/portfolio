import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { useTranslation } from "react-i18next";
import '../i18n.js';

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setCurrentAnimation("hit");
    
    // Afficher un message de succès immédiatement
    setTimeout(() => {
      showAlert({
        show: true,
        text: "Merci pour votre message ! Je vous répondrai rapidement 😃",
        type: "success",
      });
      
      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation("idle");
        setIsSubmitting(false);
      }, 5000);
    }, 1000);
  };

  const { t } = useTranslation();

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>{t('pages.contact.title')}</h1>

        <form
          action="https://formsubmit.co/3e768af97e05f0c7e925516d4b5f08cd"
          method="POST"
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          {/* Champs cachés pour la configuration FormSubmit */}
          <input type="hidden" name="_subject" value="Nouveau message depuis votre portfolio !" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input 
            type="hidden" 
            name="_next" 
            value={`${window.location.origin}/thank-you`} 
          />
          <input type="hidden" name="_autoresponse" value="Merci pour votre message ! Je vous répondrai dans les plus brefs délais. - Thierry" />
          
          <label className='text-black-500 font-semibold'>
            {t('pages.contact.name')}
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Votre nom'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <label className='text-black-500 font-semibold'>
            {t('pages.contact.email')}
            <input
              type='email'
              name='email'
              className='input'
              placeholder='votre@email.com'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <label className='text-black-500 font-semibold'>
            {t('pages.contact.message')}
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Votre message...'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={isSubmitting}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isSubmitting ? t('pages.contact.button.sending') : t('pages.contact.button.submit')}
          </button>
        </form>

        <div className="mt-8 text-sm text-slate-600">
          <p>📧 Vous pouvez aussi m'envoyer un email directement à :</p>
          <a 
            href="mailto:thierryjuliotr@gmail.com" 
            className="text-blue-600 hover:underline font-semibold"
          >
            thierryjuliotr@gmail.com
          </a>
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;