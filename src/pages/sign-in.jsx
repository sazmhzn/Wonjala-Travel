import Button from "../component/Button";
import CustomeInput from "../component/CustomeInput";

const SignIn = () => {
  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background*/}
        <div className="flex h-full flex-wrap items-center gap-40">
          <div className="mb-12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="mb-12 ">
            <form className="p-6 bg-yellow-300 w-100">
              {/*Sign in section*/}
              <div className="flex bg-red-300 flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg text-center">Sign in with</p>             
              </div>

              {/* Separator between social media sign in and email/password sign in */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center text-gray-400 font-semibold">
                  Or
                </p>
              </div>

              {/* Email input */}
              <div className="relative mb-6" data-twe-input-wrapper-init="">
                <CustomeInput
                  type={"text"}
                  placeholder={"Email address"}
                  id={"exampleFormControlInput2"}
                />
              </div>

              {/* Password input */}
              <div className="relative mb-6" data-twe-input-wrapper-init="">
              <CustomeInput
                  type={"password"}
                  placeholder={"Password"}
                  id={"exampleFormControlInput22"}
                />
        
              </div>

              <div className="mb-6 flex items-center justify-between">
                {/* Remember me checkbox */}
          

                {/*Forgot password link*/}
                <a href="#!">Forgot password?</a>
              </div>

              {/* Login button */}
              <div className="text-center lg:text-left">
                <Button type={"button"} value={"Login"} />
       

                {/* Register link */}
                <p className="mb-0 mt-2 mr-4 pt-1 text-sm font-semibold">
                  Dont have an account?
                  <a
                    href="#!"
                    className="text-blue-600 ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
