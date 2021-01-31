import React from 'react';
import Preview from './Preview';

export default class Main extends React.Component {

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