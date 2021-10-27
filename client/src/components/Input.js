import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./styles.css"

const input = ({symbol, placeholder}) => {
    return (
            <InputGroup>
                <Input placeholder={placeholder} />
                {symbol? <InputGroupAddon addonType="append">
                    <InputGroupText>{symbol}</InputGroupText>
                </InputGroupAddon>: " "}
            </InputGroup>

    )
}

export default input
