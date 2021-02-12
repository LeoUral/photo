import React from 'react';
import Preview from './Preview';
import Image_1 from '../image/image_1.jpg';

// компонент с коментариями вместо фотографий
export default class Comments extends React.Component {

    getNumberGallary(number) {
        console.log('click -> ' + number);
    }

    render() {

        const widthOne = '149px';
        const widthTwo = '299px';
        const heightOne = '149px';
        const heightTwo = '299px';
        const text = 'Коментарии от клиентов'


        return (
            <>
                <section>
                    <div>
                        <Preview
                            width={widthOne}
                            height={heightOne}
                            text={text}
                            gallary={'comments'}
                            url={Image_1}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    </div>
                </section>
            </>
        )
    }
}