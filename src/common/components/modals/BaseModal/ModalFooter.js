import React from 'react'
import './style.module.scss'

const BaseModalFooter = ({ children, ...props }) => (
    <div className="modal-footer mt-4 p-0" {...props}>
        {children}
    </div>
)

export default BaseModalFooter
