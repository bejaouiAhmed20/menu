import { useState } from 'react';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Contact.scss';

/**
 * Contact page with contact form and restaurant information
 */
export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: t('contact.info.address'),
      details: [t('contact.details.street'), t('contact.details.city')]
    },
    {
      icon: <Phone />,
      title: t('contact.info.phone'),
      details: [t('contact.details.phone')]
    },
    {
      icon: <Email />,
      title: t('contact.info.email'),
      details: [t('contact.details.email')]
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="contact-section__content">
          {/* Contact Form */}
          <motion.div
            className="contact-section__form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              <button type="submit" className="submit-btn">
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="contact-section__info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-section__contact-item">
                <div className="icon">
                  {info.icon}
                </div>
                <div className="details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact-section__map">
              <p>{t('contact.map')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};