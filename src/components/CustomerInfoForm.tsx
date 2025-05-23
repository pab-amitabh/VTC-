'use client';

import React, { useState, memo } from 'react';
import { X } from 'lucide-react';
import { getRedirectionUrl } from '@/constants/redirectLinks';

interface CustomerInfoFormProps {
  providerName: string;
  planName: string;
  insuranceUrl: string;
  onSubmit: (name: string, phone: string, email: string) => Promise<void>;
  onClose: () => void;
}

const CustomerInfoForm = ({ 
  providerName, 
  planName, 
  insuranceUrl,
  onSubmit,
  onClose
}: CustomerInfoFormProps) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formTouched, setFormTouched] = useState(false);

  // Form validation
  const validateForm = () => {
    let isValid = true;
    setFormTouched(true);
    
    // Validate name
    if (!customerName.trim()) {
      setNameError('This field is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!customerEmail.trim()) {
      setEmailError('This field is required');
      isValid = false;
    } else if (!emailRegex.test(customerEmail)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Submit data to parent component
        await onSubmit(customerName, customerPhone, customerEmail);
        
        // First close the form
        onClose();
        
        // Then redirect after a small delay
        setTimeout(() => {
          // Get the redirection URL (either the provided one or fallback)
          console.log('Provider:', providerName, 'Original URL:', insuranceUrl || 'null/undefined');
          const redirectUrl = getRedirectionUrl(providerName, insuranceUrl);
          console.log('Final redirect URL being used:', redirectUrl);
          
          // Open the URL if it's valid
          if (redirectUrl && redirectUrl !== '#') {
            window.open(redirectUrl, '_blank');
          }
        }, 100);
      } catch (error) {
        console.error('Error submitting customer info:', error);
        setIsSubmitting(false);
      }
    }
  };

  // Handle explicit close with cleanup
  const handleClose = () => {
    // Reset form state before closing
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setIsSubmitting(false);
    setFormTouched(false);
    
    // Call the parent's onClose
    onClose();
  };

  // Handle field change with validation if the form has been touched
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomerName(value);
    
    if (formTouched) {
      if (!value.trim()) {
        setNameError('This field is required');
      } else {
        setNameError('');
      }
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomerPhone(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomerEmail(value);
    
    if (formTouched) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (!value.trim()) {
        setEmailError('This field is required');
      } else if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  return (
    <div className="p-4">
      {/* Close button */}
      <button 
        onClick={handleClose} 
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <X size={20} />
      </button>
      
      <h2 className="text-xl font-bold text-deepBlue mb-2">Almost there!</h2>
      <p className="text-gray-600 mb-4 text-sm">
        Please provide your contact information to proceed to {providerName}'s {planName} plan.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={handleNameChange}
              className={`w-full px-3 py-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-deepBlue outline-none transition-colors`}
              placeholder="John Doe"
            />
            {nameError && <p className="mt-1 text-xs text-red-500">{nameError}</p>}
          </div>
          
          <div>
            <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="customerEmail"
              type="email"
              value={customerEmail}
              onChange={handleEmailChange}
              className={`w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-deepBlue outline-none transition-colors`}
              placeholder="john.doe@example.com"
            />
            {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
          </div>
          
          <div>
            <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="customerPhone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s\-\(\)]*"
              value={customerPhone}
              onChange={handlePhoneChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-deepBlue outline-none transition-colors"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 rounded-lg font-medium uppercase transition-colors shadow-sm bg-magenta hover:bg-magenta/90 text-white disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? 'Processing...' : 'Continue to Insurance Plan'}
            </button>
          </div>
        </div>
      </form>
      
      <p className="text-xs text-gray-500 mt-3 text-center">
        By providing your contact information, you agree that we may contact you about your insurance inquiry.
      </p>
    </div>
  );
};

CustomerInfoForm.displayName = 'CustomerInfoForm';

export default memo(CustomerInfoForm); 