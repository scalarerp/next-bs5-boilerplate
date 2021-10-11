import React from 'react'
import './style.module.scss'

const BaseModalBody = ({ children, ...props }) => (
    <div className="pt-3" style={{ minWidth: 320 }} {...props}>
        {children}
    </div>
)

export default BaseModalBody
