import React from 'react';
import Preview from './Preview';
import Image_1 from '../image/image_1.jpg';

/** компонент с коментариями вместо фотографий
 * Выводит в модальное окно комментарии расположенные на основном 
 * экране
 * TODO организовать вывод комментариев из массива
 * TODO компанент PREVIEW поместить в цикл с перебором массива
 * */
export default class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.getNumberGallary = this.getNumberGallary.bind(this);
    }

    getNumberGallary(number) {
        console.log('click -> ' + number);// test
        this.props.onChangeComment(number);
    }

    render() {

        // const widthOne = '149px';
        const widthTwo = '299px';
        const heightOne = '74px'; //149px
        // const heightTwo = '299px';
        // const text = 'Коментарии от клиентов'


        return (
            <>
                <section>
                    <div>
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Коментарий - 1'}
                            gallary={'comments0'}
                            url={Image_1}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Коментарий - 2'}
                            gallary={'comments1'}
                            url={Image_1}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Коментарий - 3'}
                            gallary={'comments2'}
                            url={Image_1}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                        <Preview
                            width={widthTwo}
                            height={heightOne}
                            text={'Коментарий - 4'}
                            gallary={'comments3'}
                            url={Image_1}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    </div>
                </section>
            </>
        )
    }
}