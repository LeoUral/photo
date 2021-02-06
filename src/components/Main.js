import React from 'react';
import ModalWindow from './ModalWindow';
import Preview from './Preview';
import SearchImage from './searchImage';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: [], // массив с количеством галерей и фото в них  
            gallary: [], //выбранная галерея с фото
            show: false,
            numberFoto: 0 //номер текущего фото при просмотре
        }

        this.buildView = this.buildView.bind(this);
        this.changeHeightView = this.changeHeightView.bind(this);
        this.getNumberGallary = this.getNumberGallary.bind(this);
        this.changeShow = this.changeShow.bind(this);
        this.doStepLeft = this.doStepLeft.bind(this);
        this.doStepRight = this.doStepRight.bind(this);
    }

    defineNumberImage() {
        SearchImage.searchGallary();

        setTimeout(() => {
            this.setState({ foto: SearchImage.arrGallary });
        }, 5000)

    }

    changeHeightView(data) {
        this.heightNew = '300px';
        this.heightNew2 = '300px';

        if (data.length > 11) {
            this.heightNew = '450px';
        }
        if (data.length > 15) {
            this.heightNew = '600px';
        }
        if (data.length > 18) {
            this.heightNew2 = '450px';
        }
    }

    getNumberGallary(gallary) {
        this.setState({
            gallary: gallary, //выбранная галерея с фото
            show: true,
            numberFoto: 0
        })
        console.log(gallary + ' < in MAIN'); //test            
    }

    changeShow() {
        this.setState({
            show: false
        })
    }

    doStepLeft() {
        if (this.state.numberFoto > 0) {
            this.setState({
                numberFoto: this.state.numberFoto - 1
            })
        }
        console.log('left');//test
    }

    doStepRight() {
        if (this.state.numberFoto < this.state.gallary[1] - 1) {
            this.setState({
                numberFoto: this.state.numberFoto + 1
            })
        }
        console.log('right');//test
    }

    buildView(data) {

        this.viewerBlockOne = [];
        this.viewerBlockTwo = [];
        this.viewerBlockThree = [];

        const widthOne = '149px';
        const widthTwo = '299px';
        const heightOne = '149px';
        const heightTwo = '299px';
        const gallary = data;

        this.changeHeightView(data);

        for (let i = 0; i < data.length; i++) {
            switch (i % 10) {
                case 0:
                    this.viewerBlockOne.push(
                        <Preview
                            key={i}
                            width={widthOne}
                            height={heightOne}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}

                        />
                    );
                    break;
                case 1:
                    this.viewerBlockOne.push(
                        <Preview
                            key={i}
                            width={widthOne}
                            height={heightTwo}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    );
                    break;
                case 2:
                case 3:
                case 5:
                case 6:
                    this.viewerBlockTwo.push(
                        <Preview
                            key={i}
                            width={widthOne}
                            height={heightOne}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    );
                    break;
                case 4:
                    this.viewerBlockTwo.push(
                        <Preview
                            key={i}
                            width={widthOne}
                            height={heightTwo}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    );
                    break;
                case 7:
                    this.viewerBlockThree.push(
                        <Preview
                            key={i}
                            width={widthTwo}
                            height={heightOne}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    );
                    break;
                case 8:
                case 9:
                    this.viewerBlockThree.push(
                        <Preview
                            key={i}
                            width={widthOne}
                            height={heightOne}
                            gallary={gallary[i]}
                            url={`../image/gal_${i}/img_0.jpg`}
                            onGetNumberGallary={this.getNumberGallary}
                        />
                    );
                    break;
                default: console.log('END');
            }
        }
    }

    componentDidMount() {
        this.defineNumberImage();
    }


    render() {

        this.buildView(this.state.foto);
        const heightNew = this.heightNew;
        const heightNew2 = this.heightNew2;

        return (
            <>
                <main className="main">
                    <ModalWindow
                        numberGallary={this.state.gallary[0]}
                        numberImage={this.state.numberFoto}
                        show={this.state.show}
                        onChangeShow={this.changeShow}
                        onStepLeft={this.doStepLeft}
                        onStepRight={this.doStepRight}
                    />
                    <section className="main__left">
                        <div className="left_block">
                            <div className="main__left_one one_width">
                                <div className="block_icon">&#9675;</div>
                            </div>
                            <div className="main__left_two one_width">
                                <div className="text_block">
                                    <h3>foto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sit, fugiat, soluta id totam illum, eveniet placeat reiciendis voluptate ea obcaecati magnam. Aut tempora nesciunt ut dolor odit tenetur modi, aliquid, similique incidunt non autem!</p>
                                    <div> ... </div>
                                </div>
                            </div>
                            <div className="main__left_three one_width">
                                {this.viewerBlockOne}
                            </div>
                        </div>
                        <footer className="footer"></footer>
                    </section>
                    <section className="main__right">
                        <div className="right_block">
                            <div className="main__right_one two_width" style={{ height: `${heightNew}` }}>
                                {this.viewerBlockTwo}
                            </div>
                            <div className="main__right_two one_width" style={{ height: `${heightNew2}` }}>
                                {this.viewerBlockThree}
                            </div>
                        </div>
                        <footer className="footer"></footer>
                    </section>
                </main>
            </>
        )
    }
}