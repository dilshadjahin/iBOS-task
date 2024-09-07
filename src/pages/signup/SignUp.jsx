import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext";
import { Form, Input } from "antd";

const SignUp = () => {
    const { register } = useContext(AuthContext);
    const [newUser, setNewUser] = useState({ email: '', password: '' });
    const navigate  = useNavigate();
    const handleRegister = () => {
        register(newUser);
        navigate("/signin");
    };
    return (
        <div className="md:h-[610px]  flex">
            {/* Left Side: Signup Form */}
            <div className="flex items-center justify-center lg:w-1/2 bg-base-100 lg:p-10 md:p-36 p-6">
                <div className="w-full max-w-md">
                    <h1 className="text-center lg:text-2xl text-lg font-bold mb-4">Welcome To</h1>
                    <h2 className="text-center lg:text-3xl text-xl font-bold text-black mb-2">
                        Furni<span className="text-blue-500">Flex</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Signup for purchase your desire products
                    </p>

                    <Form className="space-y-4">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="First name (optional)"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last name (optional)"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <Form.Item label="Email">
                            <Input
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input.Password
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                        </Form.Item>
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
                        <button onClick={handleRegister} className="btn bg-black text-white w-full">Signup</button>
                    </Form>

                    <div className="divider my-6">or</div>

                    <div className="md:flex justify-between">
                        <button className="btn btn-outline  text-black md:w-1/2 w-full m-2">
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                alt="Google"
                                className="w-6 h-6 mr-2"
                            />
                            Sign in with Google
                        </button>
                        <button className="btn btn-outline  text-black md:w-1/2 w-full m-2">
                            <img
                                src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1725685497/Vector_qdwvtj.png"
                                alt="Apple"
                                className="w-6 h-6 mr-2"
                            />
                            Sign in with Apple
                        </button>
                    </div>

                    <p className="text-center font-semibold text-black mt-4">
                        Have an account? <Link to="/signin" className="text-[#0F3DDE]">Sign In</Link>
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
    )
}

export default SignUp