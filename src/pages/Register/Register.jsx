import { useForm } from "react-hook-form";
import logo from "../../assets/logoblue.png";
import sideImg from "../../assets/BG.png";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(signup(data));
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <img src={logo} alt="Bookler" className="w-35 mx-auto mb-7" />
          <h2 className="text-xl font-semibold mb-6 text-center">SIGNUP</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="user name"
                {...register("username", { required: "Username is required" })}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                    message:
                      "Must include 1 capital letter, 1 number, and 1 special character",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="confirm password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <select
                {...register("country", { required: "Country is required" })}
                defaultValue=""
                className="w-full border border-gray-300 px-4 py-2 rounded"
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option>Egypt</option>
                <option>USA</option>
                <option>Germany</option>
                <option>UK</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="+20 000 000 0000"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+\d][\d\s-]{9,15}$/,
                    message: "Invalid phone number",
                  },
                  maxLength: {
                    value: 12,
                    message: "Phone number can't be more than 12 digits",
                  },
                })}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-500 mb-3">
              Signup with Others
            </p>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Login with <span className="font-semibold ml-1">Google</span>
              </button>

              <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
                <img
                  src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Login with <span className="font-semibold ml-1">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 h-screen">
        <img
          src={sideImg}
          alt="Airplane"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
