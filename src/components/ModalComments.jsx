import React from 'react';


/**
 * Модальное окно выводящее комментарии на экран
 * TODO брать комментарии из массива согласно выбранного
 */
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
        const urlComment = this.props.urlComment;
        const url = `../comments/com_${urlComment}.jpg`;
        console.log(`urlComment: ${urlComment} ==> ${url}`);
        return (
            <>
                <section className="modal" style={{ display: visual ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleClose}></div>
                    <div className="modal__window">
                        <button className="btn--close" onClick={this.handleClose}> 	&#10060; </button>
                        <div className="modal__block">
                            <div className="modal__image">
                                <div className="modal__image" style={{ backgroundImage: `url(${url})` }}></div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}