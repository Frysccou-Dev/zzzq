import Title from './components/hero/title';
import Subtitle from './components/hero/subtitle';

export default function App() {
  return (
    <div className='min-h-screen flex flex-col items-start justify-end px-4 pb-8'>
      <Title />
      <Subtitle className='mt-4' />
    </div>
  );
}
