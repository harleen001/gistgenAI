import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-44 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/harleen001", "_blank")
          }
          className='black_btn'
        >
          Creator ↗
        </button>
      </nav>

      <h1 className='head_text'>
        Digest Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>GistGen</span>
        <span className='orange_gradient2 '>AI</span>
      </h1>
      <h2 className='desc'>
      GistGen AI streamlines your reading experience by summarizing articles into succinct and understandable content. Harness the power of advanced AI to distill complex information into clear, concise summaries, making knowledge more accessible than ever
      </h2>
    </header>
  );
};

export default Hero;
