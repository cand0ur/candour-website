import Routes from './routes/Routes';
import gsap from 'gsap';
import useDocumentTitle from './hooks/useDocumentTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useDocumentTitle();
  return <Routes />;
}

export default App;
