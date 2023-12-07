const About = () => {
  return (
    <>
      <div className='text-center mx-4 mt-8 space-y-4 md:mx-0'>
        <h1 className='text-3xl font-bold'>About</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, numquam?
        </p>
      </div>

      <div>
        <img
          src='https://avatars.githubusercontent.com/u/1004?v=4'
          alt='Miguel Mercedes Profile'
          width={300}
          height={300}
          className='my-4 mx-auto rounded object-cover border-2 border-[#000] hover:shadow-2xl transition duration-300 ease-in-out'
        />

        <h2 className='text-3xl font-bold mb-4 text-[#a9a9a9] text-center'>Software Developer</h2>

        <div className='space-y-4 mx-4 md:mx-0 md:my-16 bg-white/10 p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus!</p>

          <ul className='space-y-2'>
            {/* <li className="flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4"><span className="font-bold text-gray-200">Birthday:</span> 24/03/2001</li> */}
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Degree:</span> Technical Degree
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Age:</span>{' '}
              {new Date(Date.now()).getFullYear() - 2001}
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>City:</span> Santo Domingo, Dominican
              Republic
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Freelance:</span> Available
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Languages:</span> Spanish, English
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Email:</span> lmyguel0324@gmail.com
            </li>
            <li className='flex gap-2 items-center text-lg text-gray-00 my-2 md:my-4'>
              <span className='font-bold text-gray-200'>Phone:</span> +1 849 220 2444
            </li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto odio culpa minima
            consectetur illo quo eum eos, doloribus dolorem officiis?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
