import * as React from 'react'
import './style.module.scss'

export interface CloseButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    ariaLabel?: string
    // zIndexBase
}

const CloseButton = ({ onClick, ariaLabel = 'close' }: CloseButtonProps) => {
    const closeIconStyle: React.CSSProperties = {
        position: 'absolute',
        right: 20,
        top: 20,
        // zIndex: zIndexBase + 3,
    }

    return (
        <button
            type="button"
            style={closeIconStyle}
            className="modal-btn-close"
            onClick={(e) => {
                e.stopPropagation()
                onClick(e)
            }}
            aria-label={ariaLabel}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    )
}

export default CloseButton
