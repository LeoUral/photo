import React from 'react';

//Превью альбомов с фотографией
export default class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickPreview = this.handleClickPreview.bind(this);
    }


    handleClickPreview(e) {
        // console.log(e.target.dataset.gallary + ' < in PREVIEW '); // test
        let gallary = e.target.dataset.gallary.split(',');
        // console.log(gallary);//test 
        this.props.onGetNumberGallary(gallary);
    }

    render() {
        const width = this.props.width;
        const height = this.props.height;
        const url = this.props.url;
        const gallary = this.props.gallary;
        const text = this.props.text;

        return (
            <>
                <div
                    className="preview"
                    style={{
                        width: width,
                        height: height,
                        backgroundImage: `url(${url})`
                    }}
                    data-gallary={gallary}
                    onClick={this.handleClickPreview}
                >
                    {text}
                </div>
            </>
        )
    }
}