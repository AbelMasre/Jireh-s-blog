import { Button } from 'flowbite-react';
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>Want to learn more About JavaScript?</h2>
        <p>Checkout these resources with Jireh School</p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none mt-3"
        >
          <a
            href="https://jirehtech.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll
          </a>
        </Button>
      </div>
      <div className="p-5 flex-1">
        <img
          src="https://i0.wp.com/ytimg.googleusercontent.com/vi/jS4aFq5-91M/maxresdefault.jpg"
          alt="javascript"
        />
      </div>
    </div>
  );
}
