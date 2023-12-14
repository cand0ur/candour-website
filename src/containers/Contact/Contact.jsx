import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
import useModal from '../../hooks/useModal';
import ContactUsAnimation from '../../utils/ContactUsAnimation';
import { arrowRightWhite, call, map } from '../../constants/assets';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import Sent from '../../utils/Sent';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
  });
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const container = useRef();
  useGSAP(
    () => {
      ContactUsAnimation();
    },
    { scope: container }
  );

  const { toggleModal, ModalOverlay } = useModal();

  function submitHandler(e) {
    e.preventDefault();

    setIsSending(true);

    const parameters = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      industry,
      message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        parameters,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          toggleModal();
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
          });
          setIndustry('');
          setMessage('');
        },
        () => {
          alert('Failed to send the message, please try again!');
          setIsSending(false);
        }
      )
      .catch((err) => console.log(err));
  }

  return (
    <section
      ref={container}
      className='max-w-[1264px] mx-auto px-4 xl:px-0 pt-24 lg:pt-[120px]'>
      <div id='contact'>
        <h1 className='text-4xl md:text-[60px] text-center font-extrabold text-text-default font-grotesk mb-3'>
          How can we help?
        </h1>
        <p
          id='desc'
          className='text-text-secondary max-w-4xl text-center mx-auto leading-8'>
          Let us know how we can help you reach your goals
        </p>
        <p
          id='desc'
          className='md:hidden text-text-secondary max-w-4xl text-center mx-auto leading-6'>
          Tell us what you need and we will find the best solution for you.
        </p>

        <div className='flex flex-col-reverse lg:flex-row gap-10 md:gap-4 xl:gap-10 mt-6 md:mt-[68px]'>
          <div className='flex-1'>
            <p
              id='desc'
              className='hidden md:block text-2xl font-semibold max-w-[460px] mb-2.5 leading-[36px]'>
              Tell us what you need and we will find the best solution for you.
            </p>
            <div className='w-full h-[432px] rounded-2xl mx-auto'>
              <img id='img' src={map} alt='map' />
            </div>
            <div
              id='scheduled'
              className='flex gap-4 bg-surface-subdued px-6 py-8 mt-12 mb-16'>
              <span className='flex-1'>
                <p className='text-2xl font-semibold max-w-[460px] mb-2'>
                  Schedule a call instead
                </p>
                <p className='text-sm text-text-subdued mb-6'>
                  Schedule a call to speak to us at your convenience
                </p>
                <PrimaryButton>Pick a Time</PrimaryButton>
              </span>
              <img src={call} alt='call' className='w-24 md:w-fit' />
            </div>
          </div>
          <form
            onSubmit={submitHandler}
            className='flex-1 bg-surface-subdued py-8 px-6 md:p-10 rounded-2xl h-fit gap-6'>
            <div className='space-y-6'>
              <span className='flex flex-col lg:flex-row gap-6'>
                <InputField
                  required
                  autoFocus
                  name='firstName'
                  type='text'
                  placeholder='First name'
                  value={formData.firstName}
                  setFormData={setFormData}
                />
                <InputField
                  required
                  name='lastName'
                  type='text'
                  placeholder='Last name'
                  value={formData.lastName}
                  setFormData={setFormData}
                />
              </span>
              <InputField
                required
                name='email'
                type='email'
                placeholder='Email'
                value={formData.email}
                setFormData={setFormData}
              />
              <InputField
                required
                name='company'
                type='text'
                placeholder='Company'
                value={formData.company}
                setFormData={setFormData}
              />
              <select
                name='industry'
                required
                defaultValue={'Industry'}
                onChange={(e) => setIndustry(e.target.value)}
                className='text-s py-4 px-6 w-full outline-none border border-border-default rounded-l-lg placeholder:text-text-subdued'>
                <option value='' className='text-text-subdued'>
                  Industry
                </option>
                <option value='Information Technology'>
                  Information Technology
                </option>
                <option value='Healthcare'>Healthcare</option>
                <option value='Finance'>Finance</option>
                <option value='Manufacturing'>Manufacturing</option>
                <option value='Energy'>Energy</option>
                <option value='Retail'>Retail</option>
                <option value='Education'>Education</option>
              </select>
              <textarea
                cols='10'
                rows='1'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='text-sm py-4 px-6 w-full outline-none border border-border-default rounded-l-lg'
                placeholder='What do you want us to help you with?'
              />
            </div>
            {!isSending ? (
              <button className='flex gap-2 items-center justify-center md:justify-normal text-sm tracking-wide font-bold text-surface-default w-full md:w-fit mt-6 bg-action-primary-default hover:bg-action-primary-hovered px-6 py-3 rounded-lg'>
                Send Message
                <img src={arrowRightWhite} alt='arrow right' />
              </button>
            ) : (
              <button
                disabled={isSending}
                className='flex gap-2 items-center justify-center md:justify-normal text-sm tracking-wide font-bold text-surface-default w-full md:w-fit mt-6 bg-gray-400 cursor-not-allowed px-6 py-3 rounded-lg'>
                Send Message
                <img src={arrowRightWhite} alt='arrow right' />
              </button>
            )}
          </form>
          <ModalOverlay>
            <Sent toggleModel={toggleModal} />
          </ModalOverlay>
        </div>
      </div>
    </section>
  );
};

export default Contact;
