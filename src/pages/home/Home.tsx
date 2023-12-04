const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="text-center">
        <h1 className='text-4xl font-bold'>
          Hi, I'm <span className="text-[#000]">{'</'}</span> Miguel Mercedes <span className="text-[#000]">{'/>'}</span>
        </h1>
        <p>I'm a software developer, i like coding cool stuff for cool people. <br /> I'm looking to develop my skills in the field.</p>
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/miguelmercedes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-[#000] hover:text-[#000]"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
