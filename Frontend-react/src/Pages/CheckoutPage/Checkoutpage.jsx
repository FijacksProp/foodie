import React, { useState } from 'react'

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({
      ...formData,
      name : '',
      email: '',
      address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''

    })
  }

  return (
    <div className='w-full min-h-screen bg-color-white dark:bg-color-browwn flex items-center justify-center px-4 py-24 sm:py-20'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col gap-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-800  mb-2'>Checkout</h2>
          <p className='text-gray-600 dark:text-gray-400'>Complete your order</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Full Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  '
              placeholder='John Doe'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
              placeholder='john@example.com'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Address</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
            placeholder='123 Main St'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>City</label>
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
              placeholder='New York'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>ZIP Code</label>
            <input
              type='text'
              name='zip'
              value={formData.zip}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
              placeholder='10001'
            />
          </div>
        </div>

        <div className='border-t pt-6'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4'>Payment Information</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Card Number</label>
              <input
                type='text'
                name='cardNumber'
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
                placeholder='1234 5678 9012 3456'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Expiry Date</label>
              <input
                type='text'
                name='expiry'
                value={formData.expiry}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
                placeholder='MM/YY'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>CVV</label>
              <input
                type='text'
                name='cvv'
                value={formData.cvv}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-color-brown  dark:text-gray-100'
                placeholder='123'
              />
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-orange-600 dark:bg-color-brown text-white py-3 rounded-md hover:bg-orange-700 dark:hover:opacity-85 transition duration-200 font-medium text-lg'
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

export default CheckoutPage
