import markdownContent from './department-for-business.md';
import { department, departmentMobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const DepartmentForBusiness = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={department}
      imageMobile={departmentMobile}
    />
  );
};

export default DepartmentForBusiness;
