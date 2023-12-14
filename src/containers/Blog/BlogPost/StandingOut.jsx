import markdownContent from '../BlogPostContent/standing-out.md';
import { blog3, blog3Mobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const StandingOut = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={blog3}
      imageMobile={blog3Mobile}
    />
  );
};

export default StandingOut;
