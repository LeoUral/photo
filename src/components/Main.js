import React from 'react';
import ModalWindow from './ModalWindow';
import Preview from './Preview';
import SearchImage from './searchImage';
import WaitLoading from './WaitLoading';
import Comments from './Comments';
import Contact from './Contact';


//пока основной компонент с мешаниной, позже разделю на компоненты
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: [], // массив с количеством галерей и фото в них  
            gallary: [], //выбранная галерея с фото
            show: false,
            numberFoto: 0, //номер текущего фото при просмотре
            linkPosition: 0 //позиция ссылки
        }

        this.buildView = this.buildView.bind(this);
        this.changeHeightView = this.changeHeightView.bind(this);
        this.getNumberGallary = this.getNumberGallary.bind(this);
        this.changeShow = this.changeShow.bind(this);
        this.doStepLeft = this.doStepLeft.bind(this);
        this.doStepRight = this.doStepRight.bind(this);
        this.handleChangeLink = this.handleChangeLink.bind(this);
        this.viewChangeLink = this.viewChangeLink.bind(this);
        this.handleOneButton = this.handleOneButton.bind(this);
    }

    // получаем данные о количестве фотографий в галереях
    defineNumberImage() {
        new Promise((resolve) => {
            resolve(
                this.search = SearchImage.searchGallary()
            )
        })
            .then(
                result => this.setState({ foto: result }) //get SearchImage.arrGallary  
            )

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

    handleChangeLink(e) {
        const event = +e.target.dataset.link;
        this.viewChangeLink(event);
        this.setState({
            linkPosition: event
        })
        setTimeout(() => {
            console.log(this.state.linkPosition + ' < POSITION');
        })
    }

    handleOneButton() {
        this.position = this.state.linkPosition;

        if (this.position < 2) {
            this.position++;
        } else {
            this.position = 0;
        }
        this.viewChangeLink(this.position);
        this.setState({
            linkPosition: this.position
        })
    }

    viewChangeLink(event) {
        let pos = document.querySelectorAll('.link');
        pos.forEach((position) => {
            position.classList.remove('active-link');
        })
        pos[event].classList.add('active-link');
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

        const i = this.state.linkPosition;
        this.title0 = 'foto'
        this.title1 = 'comments'
        this.title2 = 'contact'
        this.text0 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi error magnam corrupti excepturi consectetur. Nostrum velit exercitationem quasi suscipit incidunt eaque pariatur mollitia. Esse tempora saepe blanditiis autem nam.'
        this.text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi error magnam corrupti excepturi '
        this.text2 = 'my contacts. Tempore nisi error magnam corrupti excepturi'

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
                                <button className="block_icon" onClick={this.handleOneButton} > <span> &#9675; </span></button>
                            </div>
                            <div className="main__left_two one_width">
                                <div className="text_block">
                                    <h3>{i === 0 ? this.title0 : i === 1 ? this.title1 : this.title2}</h3>
                                    <p>{i === 0 ? this.text0 : i === 1 ? this.text1 : this.text2}</p>
                                </div>
                                <div className="links-block">
                                    <button className="link active-link" onClick={this.handleChangeLink} data-link="0"></button>
                                    <button className="link" onClick={this.handleChangeLink} data-link="1"></button>
                                    <button className="link" onClick={this.handleChangeLink} data-link="2"></button>
                                </div>

                            </div>
                            <div className="main__left_three one_width">
                                {i === 0 ? this.viewerBlockOne : i === 1 ? '' : ''}
                            </div>
                        </div>
                        <footer className="footer"></footer>
                    </section>
                    <section className="main__right">
                        <div className="right_block">
                            <div className="main__right_one two_width" style={{ height: `${heightNew}` }}>
                                {i === 2 ? <Contact /> : i === 1 ? <Comments /> : this.viewerBlockTwo.length > 0 ? this.viewerBlockTwo : <WaitLoading />}
                            </div>
                            <div className="main__right_two one_width" style={{ height: `${heightNew2}` }}>
                                {i === 0 ? this.viewerBlockThree : i === 1 ? '' : ''}
                            </div>
                        </div>
                        <footer className="footer"></footer>
                    </section>
                </main>
            </>
        )
    }
}