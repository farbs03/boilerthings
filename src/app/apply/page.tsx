"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { sendApplication } from './sendApplication';

function ApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append('email', data.email);
    formData.append("resume", data.resume[0]);
    formData.append("whyApply", data.whyApply);
    
    const resp = sendApplication(formData);
    console.log(resp);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Name field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter your name"
          className="mt-1 block w-full"
          maxLength={50}
          required
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message?.toString()}</span>}
      </div>

      {/* Email field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          type="email"
          {...register('email', { 
            required: 'Email is required', 
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            } 
          })}
          placeholder="Enter your email"
          className="mt-1 block w-full"
          maxLength={50}
          required
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message?.toString()}</span>}
      </div>

      {/* Resume field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Resume</label>
        <Input
          type="file"
          {...register('resume', { required: 'Resume is required' })}
          className="mt-1 block w-full"
          accept='application/pdf'
          required
        />
        {errors.resume && <span className="text-red-500 text-sm">{errors.resume.message?.toString()}</span>}
      </div>

      {/* Why do you want to apply field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Why do you want to apply?</label>
        <Textarea
          {...register('whyApply', {required: "Why apply is required"})}
          placeholder="Add any other relevant information"
          className="mt-1 block w-full"
          maxLength={2000}
          required
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Submit</Button>
      </div>
    </form>
  );
}

export default ApplicationForm;