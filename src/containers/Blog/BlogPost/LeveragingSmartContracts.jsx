import markdownContent from '../BlogPostContent/leveraging-smart-contracts.md';
import { blog4, blog4Mobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const LeveragingSmartContracts = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={blog4}
      imageMobile={blog4Mobile}
    />
  );
};

export default LeveragingSmartContracts;
