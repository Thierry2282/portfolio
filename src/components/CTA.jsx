import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../i18n';

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className='cta'>
      <p className='cta-text'>
        {t('pages.cta.paragraph1')}<br className='sm:block hidden' />
        {t('pages.cta.paragraph2')}
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
