import React from 'react';
import Preview from './Preview';
import SearchImage from './searchImage';

export default class Main extends React.Component {

    defineNumberImage() {
        SearchImage.searchGallary();
    }

    componentDidMount() {
        this.defineNumberImage();
    }

    render() {

        const widthOne = '150px';
        const widthTwo = '300px';
        const heightOne = '150px';
        const heightTwo = '300px';

        return (
            <>
                <main className="main">
                    <section className="main__left">
                        <div className="left_block">
                            <div className="main__left_one">
                                icons
                            </div>
                            <div className="main__left_two one_width">
                                <div className="text_block">
                                    <h3>foto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sit, fugiat, soluta id totam illum, eveniet placeat reiciendis voluptate ea obcaecati magnam. Aut tempora nesciunt ut dolor odit tenetur modi, aliquid, similique incidunt non autem!</p>
                                    <div> ... </div>
                                </div>
                            </div>
                            <div className="main__left_three one_width">
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_0/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightTwo}
                                    url={'../image/gal_1/img_0.jpg'}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="main__right">
                        <div className="right_block">
                            <div className="main__right_one two_width">
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_2/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_3/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightTwo}
                                    url={'../image/gal_4/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_5/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_7/img_0.jpg'}
                                />
                            </div>
                            <div className="main__right_two one_width">

                                <Preview
                                    width={widthTwo}
                                    height={heightTwo}
                                    url={'../image/gal_6/img_0.jpg'}
                                />
                                <Preview
                                    width={widthOne}
                                    height={heightOne}
                                    url={'../image/gal_8/img_0.jpg'}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}