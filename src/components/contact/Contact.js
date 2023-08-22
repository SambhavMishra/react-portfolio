import React from 'react';
import Title from '../layouts/Title';

function Contact() {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" description="Contact with me" />
      </div>

      <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">
            <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 relative'></div>
        </div>

        <div className='w-[60%] h-full flex flex-col justify-between bg-red'>

        </div>
      </div>
    </section>
  );
}

export default Contact;
