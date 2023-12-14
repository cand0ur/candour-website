import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [component, setComponent] = useState(null);
  const { post } = useParams();

  let componentName = '';

  switch (post) {
    case 'migrating-applications-and-servers-to-microsoft-azure-a-comprehensive-guide':
      componentName = 'MigratingApplications';
      break;
    case 'artificial-intelligence-and-it-roles-an-era-of-transformation':
      componentName = 'ArtificialIntelligence';
      break;
    case 'unlocking-business-growth-and-savings-with-data-analytics':
      componentName = 'UnlockingBusinessGrowth';
      break;
    case 'standing-out-in-nigerias-business-landscape-amplifying-success-through-it':
      componentName = 'StandingOut';
      break;
    case 'leveraging-smart-contracts-for-business-growth-in-nigeria':
      componentName = 'LeveragingSmartContracts';
      break;
    default:
      break;
  }

  useEffect(() => {
    const importMarkdownContent = async () => {
      try {
        const module = await import(`./BlogPost/${componentName}.jsx`);
        setComponent(module.default);
      } catch (error) {
        console.error('Error loading Markdown content:', error);
      }
    };

    importMarkdownContent();
  }, []);

  return <>{component}</>;
};

export default BlogDetails;
