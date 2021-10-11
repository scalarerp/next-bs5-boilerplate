import React, { PropsWithChildren, useEffect, useState, ReactNode } from 'react'
import './style.module.scss'

interface Props {
    children: ReactNode
    show: boolean
    zIndex?: number
}

const Fade = (props: PropsWithChildren<Props>) => {
    const { show, children, zIndex = 20 } = props
    const [render, setRender] = useState(show)

    useEffect(() => {
        if (show) setRender(true)
    }, [show])

    const onAnimationEnd = () => {
        if (!show) setRender(false)
    }

    return !render ? null : (
        <div
            aria-labelledby="fadeInFadeOut"
            style={{
                zIndex, //1060 = modal do bootstrap 5.0
                animation: `${show ? 'fadeIn' : 'fadeOut'} 0.3s`,
                position: 'relative',
            }}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    )
}

export default Fade
