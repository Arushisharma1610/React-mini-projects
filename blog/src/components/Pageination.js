import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pageination = () => {
  const {page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    <div className='fixed bottom-0 insert-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
        <div className='flex items-center ga-x-3 w-11/12 max-w-2xl mx-auto'>
          {
            page > 1 && 
            (
              <button
              className='border2 border-gray-300 py-1 px-4 rounded-md' 
              onClick={() => handlePageChange(page-1)}>
                Previous
              </button>
            )
          }

          {
            page < totalPages && 
            (
              <button
              className='border2 border-gray-300 py-1 px-4 rounded-md' 
              onClick={() => handlePageChange(page+1)}>
                Next
              </button>
            )
          }

          <p className='text-sm font-semibold ml-auto'>
            Page {page} of {totalPages}
          </p>

        </div>
    </div>
  )
}

export default Pageination