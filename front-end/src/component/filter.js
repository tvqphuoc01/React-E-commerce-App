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
      color: 0,
    }
    this.currentColor = this.currentColor.bind(this);
  }

  currentColor(colorNumber) {
    this.setState({
      color: colorNumber
    })
    this.props.colorFilterFunction(colorNumber);
  }

  currentSize(sizeNumber) {
    this.props.sizeFilterFunction(sizeNumber);
  }

  render() {
    return (
        <div class="flex justify-center">
          <aside class="h-screen sticky top-0 w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <h1 className='text-2xl text-center m-0'>Men's Shoes({this.props.dataLength})</h1>
            <div className='px-4'>
              <h4>Price:</h4>
              <Slider marks={marks} step={20} defaultValue={0} />
            </div>
            <div className='px-4'>
              <h4>Color:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3 relative' onClick={() => this.currentColor(0)}>
                  <i className={this.state.color === 0 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-red-700 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(1)}>
                  <i className={this.state.color === 1 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-orange-700 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(2)}>
                  <i className={this.state.color === 2 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-yellow-400 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3 relative' onClick={() => this.currentColor(3)}>
                  <i className={this.state.color === 3 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-lime-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(4)}>
                  <i className={this.state.color === 4 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-cyan-400 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(5)}>
                  <i className={this.state.color === 5 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-violet-600 px-5 py-5'></button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3 relative' onClick={() => this.currentColor(6)}>
                  <i className={this.state.color === 6 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-purple-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(7)}>
                  <i className={this.state.color === 7 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-pink-500 px-5 py-5'></button>
                </div>
                <div className='col-span-3 relative' onClick={() => this.currentColor(8)}>
                  <i className={this.state.color === 8 ? "fa-solid fa-check text-white absolute left-3.5 bottom-3.5" : "invisible"}></i>
                  <button className='rounded-full bg-emerald-500 px-5 py-5'></button>
                </div>
              </div>
            </div>
            <div className='px-4'>
              <h4>Size:</h4>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentSize(0)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>40</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(1)}>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>40.5</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(2)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>41</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentSize(3)}>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>41.5</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(4)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>42</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(5)}>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>42.5</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentSize(6)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>43</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(7)}>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>43.5</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(8)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>44</button>
                </div>
              </div>
              <div className='grid grid-cols-9 px-4 py-4'>
                <div className='col-span-3' onClick={() => this.currentSize(9)}>
                  <button className=' rounded-2xl bg-white border-black border px-3 py-3 text-black hover:bg-black hover:text-white'>44.5</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(10)}>
                  <button className=' rounded-2xl bg-white border-black border px-4 py-3 text-black hover:bg-black hover:text-white'>45</button>
                </div>
                <div className='col-span-3' onClick={() => this.currentSize(11)}>
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