import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Projects = () => {
  const { project } = useParams();
  const [component, setComponent] = useState(null);

  const outputStr = project
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  useEffect(() => {
    const importMarkdownContent = async () => {
      try {
        const module = await import(`./Projects/${outputStr}.jsx`);
        setComponent(module.default);
      } catch (error) {
        console.error('Error loading Markdown content:', error);
      }
    };

    importMarkdownContent();
  }, []);

  return <>{component}</>;
};

export default Projects;
