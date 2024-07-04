import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen mb-5 py-3 px-3">
      <article>
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
            alt=""
          />
          <div className="font-medium text-black-100 dark:text-white">
            <p>
              {" "}
              Mani
              <time
                dateTime="2024-02-13 10:30"
                className="block text-sm text-black-100 dark:text-gray-400"
              >
                Purchased on Feb 2024
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h3 className=" ms-2 text-sm font-semibold text-block-100 dark:text-white">
            Thinking to purchase buy anothe one!
          </h3>
        </div>
        <footer className="mb-5 text-sm text-gray-700 dark:text-gray-400">
          <p>
            Reviewed in the United Kingdom on{" "}
            <time dateTime="2023-12-12 11:20">December 12,2023</time>
          </p>
        </footer>
        <p className="mb-2  dark:text-gray-700 text-wrap">
          It's been 7th time purchasing here. I am very well satisfied with the
          designs and the models.
          <br /> With that, what makes us to come again and again is, the
          hospitality shown by the workers.
          <br /> They showcase all the models and make sure that it is
          comfortable for us.
          <br /> And the patience they have is much appreciated.
        </p>
        <p className="mb-3  dark:text-gray-700 text-wrap">
          Experience we had in Malabar gold and diamonds, madurai is excellent.<br />
          Service was really good here and can see good and new collections.<br />
          KARTHICK who attended us while purchasing was really patient and good
          in showing <br /> collections whatever we ask for. Thanku and will suggest
          friends and family.
        </p>
        <a href="#"
        className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Read more
        </a>
        <aside>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                people found this helpful
            </p>
            <a href="#"
            className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Helpful
            </a>
            <a href="#"
            className="ps-4  text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">
                Report Abuse
            </a>
        </aside>
      </article>
    </div>
  );
};

export default Blogs;
