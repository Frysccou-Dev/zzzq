import Title from './components/hero/title';
import Subtitle from './components/hero/subtitle';
import CtaButton from './components/hero/cta-button';

export default function App() {
  return (
    <div className='min-h-screen flex flex-col items-start justify-end px-4 pb-8'>
      <Title />
      <Subtitle className='mt-4' />

      <div className='fixed bottom-6 right-6'>
        <CtaButton />
      </div>
    </div>
  );
}
