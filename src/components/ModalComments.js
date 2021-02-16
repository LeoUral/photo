import React from 'react';

export default class ModalComments extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onChangeVisual();
    }

    render() {

        const visual = this.props.visual;

        return (
            <>
                <section className="modal" style={{ display: visual ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleClose}></div>
                    <div className="modal__window">
                        <button className="btn--close" onClick={this.handleClose}> 	&#10060; </button>
                        <div className="modal__block">
                            <div className="modal__image">
                                COMMENT # 1
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}