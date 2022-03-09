import React from 'react';
import Preview from './Preview';
import Image_2 from '../image/image_2.jpg';
import Image_VK from '../image/VK.jpg';

//компонент с контактами
export default class Contact extends React.Component {

    getNumberGallary(number) {
        console.log('click -> ' + number);
        document.location.href = number;
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
                            text={'ВК - Рыжая лавка'}
                            gallary={"https://vk.com/ryzhaya_lavka"}
                            url={Image_VK}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Контакты сям...'}
                            gallary={"/"}
                            url={Image_2}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Контакты вообще...'}
                            gallary={"/"}
                            url={Image_2}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    </div>
                </section>
            </>
        )
    }
}