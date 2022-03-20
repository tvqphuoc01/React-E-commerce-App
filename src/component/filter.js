import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
  0: '0$',
  20: '20$',
  40: '40$',
  60: '60$',
  80: '80$',
  100: '100$'
};

class Filter extends Component {
  render() {
    return (
        <div class="flex">
          <aside class="h-screen sticky top-0 w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <h1 className='text-2xl text-center m-0'>Men's Shoes(405)</h1>
            <div className='px-4'>
              <h4>Price:</h4>
              <Slider marks={marks} step={20} defaultValue={0} />
            </div>
            <div className='px-4'>
              <h4>Color:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-full bg-red-700 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-orange-700 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-yellow-400 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-full bg-lime-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-cyan-400 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-violet-600 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-full bg-purple-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-pink-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3'>
                  <button className='col-span-3 rounded-full bg-emerald-500 px-5 py-5'></button>
                </div>
              </div>
            </div>
            <div className='px-4'>
              <h4>Size:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>40</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>40.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>41</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>41.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>42</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>42.5</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>43</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>43.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>44</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>44.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black'>45</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black'>45.5</button>
                </div>
              </div>
            </div>
          </aside>
      </div>
    );
  }
}

export default Filter