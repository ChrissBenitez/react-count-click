import React from 'react';
import '../assets/style/Counter.css'

function Counter({ clicks }){
    return (
        <div className='counter'>
            {clicks}
        </div>
    )
}

export default Counter;