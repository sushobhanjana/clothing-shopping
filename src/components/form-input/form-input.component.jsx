import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange,label,...otherInputProps})=>{
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherInputProps} />
            {
                label 
                ? <lable className={`${
                    otherInputProps.value.length ? 'shrink' : ''
                } form-input-label`}>
                    {label}
                </lable> 
                : null
            }
        </div>
    )
}


export default FormInput;

