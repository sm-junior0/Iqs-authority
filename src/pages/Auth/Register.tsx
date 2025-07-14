import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  accountType: 'admin' | 'evaluator' | 'institution' | 'trainer' | '';
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    accountType: ''
  });
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const accountTypeOptions = [
    { value: 'institution', label: 'Educational Institution' },
    { value: 'evaluator', label: 'Evaluator' },
    { value: 'trainer', label: 'Trainer' },
    { value: 'admin', label: 'Administrator' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof RegisterFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.accountType) {
      newErrors.accountType = 'Account type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (): void => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = (): void => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      await register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        accountType: formData.accountType as 'admin' | 'evaluator' | 'institution' | 'trainer'
      });
      navigate('/dashboard');
    } catch (error) {
      setErrors({ email: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {currentStep === 1 ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Register new Account
              </h2>
            </div>

            <form className="space-y-6">
              <Input
                label="Email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                error={errors.email}
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Choose your password"
                error={errors.password}
                showPasswordToggle
                required
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Please confirm your password"
                error={errors.confirmPassword}
                showPasswordToggle
                required
              />

              <Button
                type="button"
                onClick={handleNext}
                className="w-full"
              >
                Next
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/auth/login"
                  className="text-[#1B365D] hover:text-[#2563EB] font-medium transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center mb-8">
              <button
                onClick={handleBack}
                className="flex items-center text-[#1B365D] hover:text-[#2563EB] transition-colors duration-200"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back
              </button>
              <h2 className="text-2xl font-bold text-gray-900 ml-auto mr-auto">
                Register new Account
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Names"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your names"
                error={errors.fullName}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                error={errors.phoneNumber}
                required
              />

              <Select
                label="Account Type"
                name="accountType"
                value={formData.accountType}
                onChange={handleInputChange}
                options={accountTypeOptions}
                placeholder="Select your Role"
                error={errors.accountType}
                required
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Submit'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/auth/login"
                  className="text-[#1B365D] hover:text-[#2563EB] font-medium transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;