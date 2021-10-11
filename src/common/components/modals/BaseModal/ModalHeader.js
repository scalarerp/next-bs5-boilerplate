import React from 'react'
import './style.module.scss'
const BaseModalHeader = ({ children, ...props }) => (
    <div className="modal-header" {...props}>
        <div className="fs-5">{children}</div>
    </div>
)

export default BaseModalHeader
