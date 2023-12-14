import markdownContent from '../BlogPostContent/unlocking-business-growth.md';
import { blog2, blog2Mobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const UnlockingBusinessGrowth = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={blog2}
      imageMobile={blog2Mobile}
    />
  );
};

export default UnlockingBusinessGrowth;
