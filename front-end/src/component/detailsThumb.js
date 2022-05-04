import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images, myRef} = this.props;
        return (
            <div className="thumb" ref={myRef}>
                {
                    images.map((img, index) =>(
                        <img src={img} alt="" key={index} 
                        onClick={() => this.props.updateCurrentImage(index)}
                        />
                    ))
                }
            </div>
        )
    }
}

export default DetailsThumb