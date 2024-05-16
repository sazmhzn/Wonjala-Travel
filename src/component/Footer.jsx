const Footer = () => {
  return (
    <footer className="relative mt-6 rounded-xl border">
      <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
    
        <div className="flex justify-between">
          <div>
            <span className="font-medium text-gray-950 ">
              Enterprise
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-primary-600 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-primary-600 "
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-primary-600 "
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900  hover:text-primary-600"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-primary-600 "
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-950 ">Product</span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900  hover:text-primary-600 "
                >
                  Customization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900  hover:text-primary-600 "
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-900  hover:text-primary-600 "
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-950">
              Community
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-0 hover:text-primary-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-0 hover:text-primary-600"
                >
                  Discord
                </a>
              </li>
            </ul>

            <form className="mt-12 max-w-xs w-full">
              <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                <label className="block font-medium text-sm" htmlFor="email">
                  Subscribe to our newsletter
                </label>
                <input
                  className="w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-base h-9 px-3"
                  placeholder="Your email"
                  type="email"
                  id="email"
                  required
                  name="email"
                />
                <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">
                  Helper message
                </span>
              </div>
              <button
                type="submit"
                className="mt-3 w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
