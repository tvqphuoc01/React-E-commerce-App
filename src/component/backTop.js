import { BackTop } from 'antd';
import React, { Component } from 'react';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#4a5e86',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

class BackToTop extends Component {
    render() {
        return(
            <BackTop>
                <div style={style}>
                    <i class="fas fa-arrow-alt-up"></i>
                </div>
            </BackTop>
        )
    }
}

export default BackToTop;