import React from 'react';
import Preview from './Preview';
import Image_2 from '../image/image_2.jpg';

//компонент с контактами
export default class Contact extends React.Component {

    getNumberGallary(number) {
        console.log('click -> ' + number);
    }

    render() {

        // const widthOne = '149px';
        const widthTwo = '299px';
        const heightOne = '74px';//149px
        // const heightTwo = '299px';
        const text = 'Контакты, ссылки, телефоны'

        return (
            <>
                <section>
                    <div>
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Контакты там...'}
                            gallary={'contact0'}
                            url={Image_2}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Контакты сям...'}
                            gallary={'contact1'}
                            url={Image_2}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Контакты вообще...'}
                            gallary={'contact2'}
                            url={Image_2}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    </div>
                </section>
            </>
        )
    }
}