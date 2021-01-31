import React from 'react';

//Превью альбомов с фотографией
export default class Preview extends React.Component {


    handleClick() {
        console.log('Click');
    }

    render() {
        const width = this.props.width;
        const height = this.props.height;
        const url = this.props.url;

        return (
            <>
                <div
                    className="preview"
                    style={{
                        width: width,
                        height: height,
                        backgroundImage: `url(${url})`
                    }}
                    onClick={this.handleClick}
                >
                </div>
            </>
        )
    }
}