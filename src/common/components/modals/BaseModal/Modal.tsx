import React, { useRef, useEffect, ReactNode, PropsWithChildren } from 'react'
import ClickHandler from 'Common/components/ClickHandler'
import CloseButton from 'Common/components/CloseButton'
import Fade from 'Common/components/Fade'
import './style.module.scss'

interface Props {
    children: ReactNode
    show: boolean
    onHide: () => void
    className?: string
    labelledby?: string
    closeOnEsc?: boolean
    role?: 'dialog' | 'alertdialog'
    size?: string | 'small' | 'large' | 'extra' | 'fullscreen'
}

const Modal = (props: PropsWithChildren<Props>) => {
    const {
        children,
        show,
        onHide,
        className,
        labelledby = 'modalBase',
        closeOnEsc = true,
        role = 'dialog',
        size = '',
    } = props

    const refContainer = useRef<HTMLDivElement>(null)

    const handleKeydown = (event: any): void => {
        if (show && closeOnEsc && event.keyCode === 27) {
            handleClose()
        }
    }

    const handleOpen = (): void => {
        document.addEventListener('keydown', handleKeydown)

        if (!show || !refContainer.current) {
            return
        }
        const firstElementToFocus = [
            ...refContainer.current?.querySelectorAll<HTMLElement>(
                'input, select, textarea'
            ),
        ][0]
        if (firstElementToFocus) {
            firstElementToFocus.focus()
        }
    }

    const handleClose = () => {
        document.removeEventListener('keydown', handleKeydown)
        onHide()
    }

    const modalSize =
        size === 'small'
            ? 'modal-sm'
            : size === 'large'
            ? 'modal-lg'
            : size === 'extra'
            ? 'modal-xl'
            : size === 'modal-fullscreen'
            ? 'modal-fullscreen'
            : ''

    useEffect(() => {
        if (show) {
            handleOpen()
        }
        // eslint-disable-next-line
    }, [])
    // zIndex = 1059 porque o modal do bootstrap 5 é 1060+
    return (
        <>
            <Fade show={show} zIndex={1059}>
                <div
                    ref={refContainer}
                    className={`modal  ${show ? 'show' : ''} `}
                    aria-hidden={show}
                    aria-labelledby={labelledby}
                    tabIndex={-1}
                    role={role}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="overlay" />
                    <div
                        className={`modal-dialog modal-dialog-centered ${modalSize}`}
                    >
                        <div
                            className={`modal-content ${
                                className ? className : ''
                            }`}
                        >
                            <ClickHandler show={show} onClick={handleClose}>
                                {show ? (
                                    <CloseButton onClick={handleClose} />
                                ) : null}
                                <div className="px-4 py-3 ">{children}</div>
                            </ClickHandler>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Modal
