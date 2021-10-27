import React from 'react'
import { Button } from 'reactstrap';
import "./styles.css"
export const GreenButton = ({NameOfButton}) => {
    return (
        <div>
            <Button id="greenbtn" >{NameOfButton}</Button>{' '}
        </div>
    )
}


export const WhiteButton = ({NameOfButton}) => {
    return (
        <div>
            <Button id="whitebtn" >{NameOfButton}</Button>{' '}
        </div>
    )
}

