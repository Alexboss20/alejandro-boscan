import { useStore } from '@nanostores/react';
import { $currentPageConfig } from '../../store/verticalStore';

const VerticalScrollingWords = () => {
  const config = useStore($currentPageConfig);

  return (
    <div className=' bg-slate-800 w-full h-screen absolute overflow-hidden'>
      <div className='animate-slideIn flex w-full'>
        <div className='relative w-full'>
          <span className='absolute max-sm:right-2 md:left-2 lg:text-3xl md:text-xl text-slate-500'>{config.index}</span>
          <span className='absolute md:right-32 lg:right-48 max-sm:left-[4.2rem] text-md md:text-xl lg:text-3xl text-slate-500'>SCRUM</span>
        </div>
        <div className={`absolute ${config.backgroundColor} w-16 md:w-32 lg:w-48 h-[70rem] md:right-10 -top-10 sm:rotate-6`}>
          <div className="animate-verticalScroll flex flex-col items-center space-y-4 overflow-hidden">
            {config.words.map((character, index) => (
              <div 
                key={index} 
                className={`
                  ${character === '-' ? 'text-gray-400' : 'text-black'}
                  ${/[\u4e00-\u9faf]/.test(character) ? 'text-5xl font-bold' : 'text-5xl font-semibold'} 
                  tracking-widest
                `}
              >
                {character}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingWords;