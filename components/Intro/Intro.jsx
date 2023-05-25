/* eslint-disable react/react-in-jsx-scope */
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaMapMarkedAlt, FaEnvelope, FaUserTie, FaPhoneAlt } from 'react-icons/fa'

import MemberCard from "./MemberCard";

const members = [
  {
    id: 1,
    name: 'Chief Editor',
    position: 'Leader',
    avatar: '/b_redactor.webp',
    desc: 'Very bad person',
    facebook: 'https://ya.ru',
  },
  {
    id: 2,
    name: 'Petrovna',
    position: 'UI/UX Support',
    avatar: '/b_pitrovna.webp',
    desc: 'Сurve and oblique support',
    facebook: 'https://ya.ru',
  },
  {
    id: 3,
    name: 'Cheby Gevara',
    position: 'Support',
    avatar: '/b_cheby.webp',
    desc: 'Eared monster',
    facebook: 'https://ya.ru',
  },
  {
    id: 4,
    name: 'A Bolit',
    position: 'Psychotherapist',
    avatar: '/b_bolit.webp',
    desc: 'Brains need to be healed',
    facebook: 'https://ya.ru',
  },
  {
    id: 5,
    name: 'Mike',
    position: 'Support',
    avatar: '/b_mike.jpg',
    desc: 'Whiskey always available',
    facebook: 'https://ya.ru',
  },
  {
    id: 6,
    name: 'Kuzma mather',
    position: 'CEO',
    avatar: '/b_mather.webp',
    desc: 'Mother of all mothers',
    facebook: 'https://ya.ru',
  },
  {
    id: 7,
    name: 'Gennady',
    position: 'Crocodile regular',
    avatar: '/b_gena.webp',
    desc: 'Just a green crocodile',
    facebook: 'https://ya.ru',
  },
]

const Intro = () => {
    return (
      <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 rounded-lg mb-8 border border-sky-900'>
        <h3 className='mb-8 m-8 pb-4 font-semibold border-b border-sky-900'>About</h3>
        <div>
          {/* <p className='mb-4 leading-relaxed m-8'>Blog team desc</p> */}
          <p className='m-8 max-w-xl p-0.5 text-base text-text sm:p-2'>
            Stupid AI-powered Blog by{' '}
            <a
              href={`https://twitter.com/@JohnDoe`}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-blue-400 underline underline-offset-4'
            >
              John Doe's
            </a>
            .<br/>Sharing my thoughts on various strange things
          </p>
          {/* <h3 className='mx-8 mt-8 text-center'>Blog team</h3>
          <div className='hidden lg:flex items-center justify-center'></div>
          <div className='flex lg:hidden items-center justify-center'></div> */}
          <h3 className='mx-8 mt-8 text-2xl lg:text-3xl'>Blog dream team</h3>
          <div className='my-8 lg:mx-8'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper'
            >
              {members.map((member) => (
                <SwiperSlide key={member.id}>
                  <MemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex items-center space-x-3 mt-8 m-8'>
            <FaEnvelope className='w-6 h-6 text-blue-400' />
            <a
              href='mailto:contact@stupid.blog'
              className='max-w-xs hover:text-blue-400 transition-all'
            >
              contact@stupid.blog
            </a>
          </div>
        </div>
      </div>
    )
}

export default Intro