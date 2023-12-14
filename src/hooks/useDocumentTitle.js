import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
  const { pathname } = useLocation();

  const transformedTitle =
    pathname === '/'
      ? 'Home'
      : pathname.split('/').filter(Boolean).pop().charAt(0).toUpperCase() +
        pathname.split('/').filter(Boolean).pop().slice(1).replace(/-/g, ' ');

  const title = `Candour - ${transformedTitle}`;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
};

export default useDocumentTitle;
