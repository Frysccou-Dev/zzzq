import Title from '../hero/title';
import Subtitle from '../hero/subtitle';
import CtaButton from '../hero/cta-button';
import ShaderBackground from '../background';

export default function MainContent() {
  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <ShaderBackground />
        <div className='absolute left-0 bottom-0 w-full flex flex-col items-start justify-end px-4 pb-8 pointer-events-none'>
          <div className='pointer-events-auto'>
            <Title />
            <Subtitle className='mt-4' />
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-black'>
        <div className='max-w-3xl mx-auto px-4 py-12'></div>
      </div>

      <div className='fixed bottom-6 right-6'>
        <CtaButton />
      </div>
    </div>
  );
}
