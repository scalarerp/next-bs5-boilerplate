import React, { PureComponent } from 'react'

class ClickHandler extends PureComponent {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
        document.addEventListener('touchstart', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
        document.removeEventListener('touchstart', this.handleClickOutside)
    }

    handleClickOutside = ({ target }) => {
        if (
            this.props.show &&
            this.wrapperRef &&
            !this.wrapperRef.contains(target)
        ) {
            this.props.onClick()
        }
    }

    render = () => (
        <div ref={(node) => (this.wrapperRef = node)}>
            {this.props.children}
        </div>
    )
}

export default ClickHandler
