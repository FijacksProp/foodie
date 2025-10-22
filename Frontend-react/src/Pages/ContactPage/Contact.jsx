import React, { useState } from 'react'




function Contact() {
   
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     message: '',
   })

   function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
   }

   function hanleSubmit(e) {
    e.preventDefault();
    setFormData({name: '', email: '', message: ''})
    console.log(formData);
    
   }
   
  return (
    <div className='min-h-screen bg-gary-50 dark:bg-color-browwn py-20 sm:mt-10 px-4 sm-px-4 md-6 lg-8'>
      <div className='max-w-md mx-auto rounded-lg bg-white shadow-md p-6'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-8'>Contact Us</h1>
        <form onSubmit={hanleSubmit} className='space-y-6'>
          <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input 
          type="text"
          id='name'
          name='name'
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500'
          />

          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input 
          type="email"
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500'
          />
          <div>
         <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
              <button type='submit' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 dark:bg-color-brown hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ">Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact