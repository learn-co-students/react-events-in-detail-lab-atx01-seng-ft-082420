import React from 'react'

export default class CoordinatesButton extends  React.Component {

    handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    let coordinates = [x,y]
    this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.handleClick}/>
        )
    }

}