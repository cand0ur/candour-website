import markdownContent from './traderzmart.md';
import { traderzmart, traderzmartMobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const Traderzmart = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={traderzmart}
      imageMobile={traderzmartMobile}
    />
  );
};

export default Traderzmart;
