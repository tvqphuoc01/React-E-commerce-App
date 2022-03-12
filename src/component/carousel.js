import React, { Component } from 'react';
const CarouselImage = ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg'];
const CarouselTextLarge = ['Sneaker & Athletic Shoes', "This Week's Most Wanted", 'ADIDAS Sale Off'];
const CarouselTextMini = ['9.99$', '49.5$', '60%'];
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CarouselImageState: 0,
            fade: false
        };
        this.onClickNextPic = this.onClickNextPic.bind(this);
        this.onClickPrevPic = this.onClickPrevPic.bind(this);
        this.startSlider = this.startSlider.bind(this);
    }

    onClickNextPic() {
        this.setState(prevState => {
            if(prevState.CarouselImageState >= 2) {
                return {
                    CarouselImageState : 0,
                    fade: true,
                }
            } else {
                return {
                    CarouselImageState : prevState.CarouselImageState + 1,
                    fade: true,
                };
            }
        });
    }

    onClickPrevPic() {
        this.setState(prevState => {
            if(prevState.CarouselImageState <= 0) {
                return {
                    CarouselImageState : 2,
                    fade: true,
                }
            } else {
                return {
                    CarouselImageState : prevState.CarouselImageState - 1,
                    fade: true,
                };
            }
            
        });
    }
    
    startSlider = () => {
        setInterval(() => {
            this.onClickNextPic();
        }, 10000);
    };

    componentDidMount() {
        this.startSlider();
    }

    
    render() {
        const fade = this.state.fade;
        return(
            <div className="relative max-w-screen-xl m-auto">
                <div className={fade ? 'fade-anim w-full relative select-none' : 'w-full relative select-none'} onAnimationEnd={() => this.setState({ fade: false })}>
                    <div className='aspect-w-16 aspect-h-9'>
                        <img src={CarouselImage[this.state.CarouselImageState]} alt="" />
                    </div>
                    <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                        <button onClick={this.onClickPrevPic} className='text-white p-1 pr-2 pl-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'>
                            <i className="fa-solid fa-angle-left text-4xl"></i>
                        </button>
                        <button onClick={this.onClickNextPic} className='text-white p-1 pr-2 pl-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'>
                            <i className="fa-solid fa-angle-right text-4xl"></i>
                        </button>
                    </div>
                </div>
                <div className='absolute top-60 left-60 hidden lg:block'>
                    <h1 className='text-6xl text-white font-black'>{CarouselTextLarge[this.state.CarouselImageState]}</h1>
                    <h5 className='text-2xl text-white font-thin'>{'from ' + CarouselTextMini[this.state.CarouselImageState]}</h5>
                    <button class="bg-white hover:bg-[#445f84] hover:text-white text-[#445f84] font-bold mt-5 py-2 px-4 rounded-full">
                        Shop Now
                    </button>
                </div>
                <div className='absolute top-20 left-20 lg:invisible'>
                    <h1 className='text-xl text-white font-black'>{CarouselTextLarge[this.state.CarouselImageState]}</h1>
                    <h5 className='text-xl text-white font-thin'>{'from ' + CarouselTextMini[this.state.CarouselImageState]}</h5>
                </div>
            </div>
        )
    }
}

export default Carousel