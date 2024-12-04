import React from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'

const ImageClipBox = ({src, clipClass}) => (
  <div className={clipClass}>
    <img 
      src={src}
    />
  </div>
)

const Contact = () => {
  return (
    <div 
      id='contact'
      className='my-28 min-h-[100vh] w-screen px-10'
    >
      <div className='relative rounded-lg bg-black py-28 text-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
          <ImageClipBox 
            clipClass='contact-clip-path-1'
            src='img/contact-1.webp'
            alt="Contact Image 1"
          />
          <ImageClipBox 
            clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
            src='img/contact-2.webp'
            alt="Contact Image 2"
          />
        </div>

        <div className='absolute -top-40 left-20 w-60 sm:top-1/2 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
          <ImageClipBox 
            clipClass='absolute md:scale-125'
            src='img/swordman-partial.webp'
            alt="Swordman Partial Image"
          />
          <ImageClipBox 
            clipClass='sword-man-clip-path md:scale-125'
            src='img/swordman.webp'
            alt="Swordman Image"
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>
            join zentry
          </p>

          <AnimatedTitle 
            containerClass='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'
            title="Let's b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t<b>o</b>gether."
          />

          <Button
            title='contact us'
            containerClass='mt-10 cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default Contact