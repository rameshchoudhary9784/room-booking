import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center justify-center '>
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l-md pl-3 pr-16 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    </div>
  )
}

export default Search
