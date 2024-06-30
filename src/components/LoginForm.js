import axiosInstance from '@/config/AxiosIntercepter';
import { setIsLogin } from '@/store/slices/LoginSlice';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LoginForm = ({ formData, setFormData }) => {
    const dispatch = useDispatch();
    const Api = process.env.SERVICE_BASE_URL;
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const requestData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                qualification: formData.qualification,
                gender: formData.gender,
                email: formData.email,
                profilePic: formData.profilePic,
            };

            const { data } = await axiosInstance.post(`${Api}/api/users/oauth-login`, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem('authToken', data.data.authToken)
            toast(<div>✅ Successfully created your account</div>);
            dispatch(setIsLogin(true));
        } catch (error) {
            toast.error('Error! Try again later.');
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="bg-blue-100 p-10 rounded-lg space-y-14 shadow-md">
            <div className="text-xl font-semibold text-blue-800">Few more questions</div>
            <form onSubmit={handleFormSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="grid-mobile" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Mobile No.
                        </label>
                        <input
                            type="tel"
                            id="grid-mobile"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            placeholder="Enter your mobile number"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="grid-qualification" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Highest Qualification
                        </label>
                        <input
                            type="text"
                            id="grid-qualification"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleInputChange}
                            placeholder="Highest qualification"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="grid-gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Gender
                        </label>
                        <div className="relative">
                            <select
                                id="grid-gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option>MALE</option>
                                <option>FEMALE</option>
                                <option>OTHER</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 mt-4 rounded"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines strokeColor="white" strokeWidth="4" animationDuration="0.75" width="25" visible={true} />
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
