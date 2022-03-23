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
  constructor(props) {
    super(props);
    this.state = {
      color: 0
    }
    this.currentColor = this.currentColor.bind(this);
  }

  currentColor(colorNumber) {
    this.setState({
      color: colorNumber
    })
  }

  render() {
    return (
        <div class="flex justify-center">
          <aside class="h-screen sticky top-0 w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <h1 className='text-2xl text-center m-0'>Men's Shoes(405)</h1>
            <div className='px-4'>
              <h4>Price:</h4>
              <Slider marks={marks} step={20} defaultValue={0} />
            </div>
            <div className='px-4'>
              <h4>Color:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3 relative' onClick={() => this.currentColor(1)}>
                  <i className={this.state.color === 1 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className={this.state.color === 1 ? 'rounded-full bg-red-700 px-5 py-5' : 'rounded-full bg-red-700 px-5 py-5'}></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(2)}>
                  <button className='rounded-full bg-orange-700 px-5 py-5'></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(3)}>
                  <button className='rounded-full bg-yellow-400 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentColor(4)}>
                  <button className='rounded-full bg-lime-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(5)}>
                  <button className='rounded-full bg-cyan-400 px-5 py-5'></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(6)}>
                  <button className='rounded-full bg-violet-600 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentColor(7)}>
                  <button className='rounded-full bg-purple-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(8)}>
                  <button className='rounded-full bg-pink-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3' onClick={() => this.currentColor(9)}>
                  <button className='rounded-full bg-emerald-500 px-5 py-5'></button>
                </div>
              </div>
            </div>
            <div className='px-4'>
              <h4>Size:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>40</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>40.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>41</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>41.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>42</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>42.5</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>43</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>43.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>44</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>44.5</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>45</button>
                </div>
                <div className='col-span-3'>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>45.5</button>
                </div>
              </div>
            </div>
          </aside>
      </div>
    );
  }
}

export default Filter