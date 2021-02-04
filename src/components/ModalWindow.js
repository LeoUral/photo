import React from 'react';

// вывод фото для просмотра из выбранной галереи
export default class ModalWindow extends React.Component {

    render() {
        const i = 0;
        const j = 0;
        const url = `../image/gal_${i}/img_${j}.jpg`

        return (
            <>
                <section className="modal">
                    <div className="modal__shadow"></div>
                    <div className="modal__window">
                        <button className="btn__close"> close </button>
                        <div className="modal__block">
                            <button className="btn__left"> left </button>
                            <div className="modal__image" style={{ backgroundImage: `url(${url})` }}></div>
                            <button className="btn__right"> right </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}