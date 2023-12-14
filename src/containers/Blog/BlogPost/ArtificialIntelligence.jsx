import markdownContent from '../BlogPostContent/artificial-intelligence.md';
import { blog1, blog1Mobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const ArtificialIntelligence = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={blog1}
      imageMobile={blog1Mobile}
    />
  );
};

export default ArtificialIntelligence;
