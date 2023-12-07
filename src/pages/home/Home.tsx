import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='text-center space-y-4 -mt-20'>
        <img
          src='https://avatars.githubusercontent.com/u/1004?v=4'
          alt='Miguel Mercedes Profile'
          className='rounded-full mx-auto w-40 h-40 object-cover border-2 border-[#000] hover:shadow-2xl transition duration-300 ease-in-out'
        />
        <h1 className='text-3xl md:text-5xl font-bold'>
          Hi, I'm <span className='text-[#a9a9a9]'>{'<'}</span>Miguel{' '}
          <span className='text-[#1ad31a]'>Mercedes</span>
          <span className='text-[#a9a9a9]'>{'/>'}</span>
        </h1>
        <p>I'm a software developer, looking to develop my skills in the field.</p>
      </div>

      <div className='flex flex-col items-center md:flex-row gap-3 mx-6 md:mx-0 md:justify-center md:space-x-4 md:items-center mt-14 text-center'>
        <a
          // href='/contact'
          className='max-w-fit text-[#1ad31a]/80 hover:text-[#1ad31a] transition duration-300 ease-in-out text-md hover:text-lg hover:underline cursor-pointer font-bold'
        >
          Download resume
        </a>
        <Link
          to={'/contact'}
          className='max-w-fit md:text-xl font-bold border-b-2 border-[#000] px-4 py-2 hover:border-[#1ad31a] hover:text-2xl rounded-xl hover:shadow-2xl bg-[#ccc] text-black hover:bg-white hover:shadow-white/50 transition duration-300 ease-in-out'
        >
          Contact me
        </Link>
      </div>

      <p className='text-2xl font-bold text-center mt-5 relative -bottom-10'>Social Media</p>
      <div className='mt-10 flex gap-4 justify-center items-center md:mx-0 border-white/80 border-t-2 pt-4 px-12'>
        <AiFillLinkedin
          className='text-5xl hover:shadow-2xl transition duration-300 ease-in-out hover:text-[#1ad31a] text-[#a9a9a9] cursor-pointer rounded-full'
          alt='linkedin'
          rel='noreferrer'
          target='_blank'
          href='www.linkedin.com/in/miguel-mercedes'
        />

        <a
          href='http://github.com/miguelmercedes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillGithub
            className='text-5xl hover:shadow-2xl transition duration-300 ease-in-out hover:text-[#1ad31a] text-[#a9a9a9] cursor-pointer rounded-full'
            alt='github'
          />
        </a>

        <AiFillInstagram
          className='text-5xl hover:shadow-2xl transition duration-300 ease-in-out hover:text-[#1ad31a] text-[#a9a9a9] cursor-pointer rounded-full'
          alt='instagram'
          rel='noreferrer'
          target='_blank'
          href='https://www.instagram.com/miguelmercedes/'
        />
      </div>
    </>
  );
};

export default Home;
