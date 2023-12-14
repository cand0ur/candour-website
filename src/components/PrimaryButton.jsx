import { Link } from 'react-router-dom';
import { arrowRightWhite } from '../constants/assets';

const PrimaryButton = ({ onClick, children }) => {
  return (
    <Link
      to='/contact-us'
      onClick={() => onClick()}
      id='hereToHelpButton'
      className='flex gap-2 items-center text-sm tracking-wide font-bold text-surface-default w-fit bg-action-primary-default hover:bg-action-primary-hovered px-4 md:px-6 py-3 rounded-lg'>
      <span>{children}</span>
      <img src={arrowRightWhite} alt='arrow right' />
    </Link>
  );
};

export default PrimaryButton;
