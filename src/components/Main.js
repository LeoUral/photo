import React from 'react';
import Preview from './Preview';
import SearchImage from './searchImage';

export default class Main extends React.Component {

    defineNumberImage(numberGallary) {
        // numberGallary = '0' //test -> номер галереи
        SearchImage.searchGallary(numberGallary);
        setTimeout(() => {
            console.log(SearchImage.quantity + ' <= RESULT');// test -> количество файлов в галерее
        }, 100);
    }

    componentDidMount() {
        this.defineNumberImage('0');
    }

    render() {

        return (
            <>
                <Preview
                    width={'50px'}
                    height={'100px'}
                    url={'./image/gal_0/img_0.jpg'}
                />
            </>
        )
    }
}