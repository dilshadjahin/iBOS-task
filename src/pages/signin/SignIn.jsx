import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { AuthContext } from "../../auth/AuthContext";


const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleLogin = () => {
    login(credentials);
    navigate("/home/products")
  };
  return (
    <>

      <div className="h-[610px]  flex">
        {/* Left Side: Signup Form */}
        <div className="flex items-center justify-center w-1/2 bg-base-100 p-10">
          <div className="w-full max-w-md">
            <h1 className="text-start text-2xl font-bold mb-4">Welcome Back!</h1>

            <p className="text-start text-gray-500 mb-6">
              Enter your Credentials to access your account
            </p>

            <form className="space-y-4">

              <Form.Item label="Email">
                <Input value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
              </Form.Item>
              <p className="text-end text-[#1E99F5] font-normal mb-6">
                Forgot Password?
              </p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkbox checkbox-primary"
                  required
                />
                <label htmlFor="terms" className="text-sm text-black font-semibold">
                  I agree to the <a href="#" className="underline">Terms & Policy</a>
                </label>
              </div>
              <button onClick={handleLogin} className="btn bg-black text-white w-full">Sign In</button>
            </form>

            <div className="divider my-6">or</div>

            <div className="flex justify-between">
              <button className="btn btn-outline  text-black w-1/2 mr-2">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-6 h-6 mr-2"
                />
                Sign in with Google
              </button>
              <button className="btn btn-outline  text-black w-1/2 ml-2">
                <img
                  src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1725685497/Vector_qdwvtj.png"
                  alt="Apple"
                  className="w-6 h-6 mr-2"
                />
                Sign in with Apple
              </button>
            </div>

            <p className="text-center font-semibold text-black mt-4">
              Have an account? <Link to="/signup" className="text-[#0F3DDE]">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Right Side: Background Image with Overlay */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1725684418/chris-lee-70l1tDAI6rM-unsplash_1_pokqkm.png"
            alt="Chair"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="text-center text-white p-10">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                  F
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">FurniFlex</h2>
              <p className="text-lg">
                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
