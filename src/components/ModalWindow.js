import React from 'react';

// вывод фото для просмотра из выбранной галереи
export default class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleStepLeft = this.handleStepLeft.bind(this);
        this.handleStepRight = this.handleStepRight.bind(this);
    }

    handleStepLeft() {
        console.log('STEP LEFT');
    }
    handleStepRight() {
        console.log('STEP RIGHT');
    }
    handleClose() {
        console.log('CLOSE');
    }

    render() {
        const i = 0;
        const j = 0;
        const url = `../image/gal_${i}/img_${j}.jpg`
        const show = this.state.show;

        return (
            <>
                <section className="modal" style={{ display: show ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleClose}></div>
                    <div className="modal__window">
                        <button className="btn--close" onClick={this.handleClose}> close </button>
                        <div className="modal__block">
                            <button className="btn--left" onClick={this.handleStepLeft}> left </button>
                            <div className="modal__image" style={{ backgroundImage: `url(${url})` }}></div>
                            <button className="btn--right" onClick={this.handleStepRight}> right </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}