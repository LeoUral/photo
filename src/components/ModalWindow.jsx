import React from 'react';

// вывод фото для просмотра из выбранной галереи
export default class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleStepLeft = this.handleStepLeft.bind(this);
        this.handleStepRight = this.handleStepRight.bind(this);
    }

    handleStepLeft() {
        this.props.onStepLeft();
    }

    handleStepRight() {
        this.props.onStepRight();
    }

    handleClose() {
        this.props.onChangeShow();
    }


    render() {

        const i = this.props.numberGallary;
        const j = this.props.numberImage;
        const url = `../image/gal_${i}/img_${j}.jpg`
        const show = this.props.show;
        // console.log(this.props.show + ' <<< >>> ' + this.props.numberGallary + ' --- ' + this.props.numberImage); //test

        return (
            <>
                <section className="modal" style={{ display: show ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleClose}></div>
                    <div className="modal__window">
                        <button className="btn--close" onClick={this.handleClose}> 	&#10060; </button>
                        <div className="modal__block">
                            <button className="btn--left" onClick={this.handleStepLeft}> &#9668; </button>
                            <div className="modal__image" style={{ backgroundImage: `url(${url})` }}></div>
                            <button className="btn--right" onClick={this.handleStepRight}> &#9658; </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}