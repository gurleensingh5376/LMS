import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col h-screen  mt-14">
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Feedback 
        </h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          If you had any issues or you liked our course, please share with us!
        </p>
        <div className="mb-4">
          <label  className="text-sm leading-7 text-gray-600">
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label  className="text-sm leading-7 text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button className="rounded border-0 bg-black py-2 px-3 text-lg text-white hover:bg-cyan-900 focus:outline-none">
          Send
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Feel free to connect with us on social media platforms.
        </p>
      </div>
    </div>
  );
};

export default Feedback;