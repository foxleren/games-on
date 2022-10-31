import './Slider.scss';
import React from 'react';

//const images = [`${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`,]
export default function Slider({images}) {
    const [activeSlide, setActiveSlide] = React.useState(1);

    // console.log(activeSlide)

    const setNextSlide = () => {
        let nextSlide = activeSlide + 1;
        if (nextSlide >= images.length) {
            nextSlide = activeSlide;
        }
        setActiveSlide(nextSlide);
    }
    const setPrevSlide = () => {
        let nextSlide = activeSlide - 1;
        if (nextSlide < 0) {
            nextSlide = activeSlide;
        }
        setActiveSlide(nextSlide);
    }
    const CalcMargin = () => {
        //console.log(-currentSlide * 100 + '%')
        if (window.innerWidth <= 650) {
            return -activeSlide * 300 + 'px';
        }
        if (window.innerWidth <= 1250) {
            return -activeSlide * 550 + 'px';
        }
        if (window.innerWidth > 1250) {
            return -activeSlide * 740 + 'px';
            //return 0;
        }
        //return -activeSlide * 100 + '%';
    }


    return (<div className={'slider-outer'}>
        <div className={'slider-toggle-left'} onClick={setPrevSlide}/>
        <div className={'slider-container'}>
            <div className={'slider-item-container'}>
                {images.map((image, index) => {
                    return <div className={`slider-item-container ${index === activeSlide ? 'active' : 'inactive'}`}
                                key={index} style={{marginLeft: `${index === 0 ? CalcMargin() : null}`}}>
                        <img className={'slider-item'} src={image} alt={''}/>
                    </div>
                })}
            </div>

        </div>
        <div className={'slider-toggle-right'} onClick={setNextSlide}/>
    </div>);
}