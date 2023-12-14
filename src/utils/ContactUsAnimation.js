import gsap from 'gsap';

const ContactUsAnimation = () => {
  gsap
    .timeline({
      defaults: { opacity: 0, duration: 0.7 },
    })
    .from('h1', { x: -200 })
    .from('#desc', { x: 100 }, '-=0.5')
    .from('#img', { scale: 0 }, '-=0.5')
    .from(
      'input, select, textarea',
      { x: 100, stagger: 0.1, ease: 'back', duration: 0.5 },
      '-=0.5'
    )
    .from(
      'button',
      { scale: 0, stagger: 0.1, ease: 'back', duration: 0.5 },
      '-=0.5'
    )
    .from('#scheduled', { opacity: 0 }, '-=0.9');
};

export default ContactUsAnimation;
