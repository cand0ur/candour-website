import markdownContent from './food-junkee.md';
import { food, foodMobile } from '../../../constants/assets';
import RenderMarkdown from '../../../components/RenderMarkdown';

const FoodJunkee = () => {
  return (
    <RenderMarkdown
      markdownContent={markdownContent}
      imagePC={food}
      imageMobile={foodMobile}
    />
  );
};

export default FoodJunkee;
