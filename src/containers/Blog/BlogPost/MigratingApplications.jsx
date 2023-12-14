import markdownContent from '../BlogPostContent/migrating-applications.md';
import { featuredArticle, featuredArticleMobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const MigratingApplications = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={featuredArticle}
      imageMobile={featuredArticleMobile}
    />
  );
};

export default MigratingApplications;
