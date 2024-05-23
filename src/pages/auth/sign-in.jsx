import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import CustomeInput from "../../component/CustomeInput";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [logginIn, setLogginIn] = useState({
    email: "",
    password: "",
  });

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
            <form className="p-6  w-100">
              {/*Sign in section*/}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg font-bold text-center">Sign in with</p>             
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
                  <Link
                    to="/sign-up"
                    className="text-blue-600 ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </Link>
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
