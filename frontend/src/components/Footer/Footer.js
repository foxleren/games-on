import './Footer.scss';
import React from 'react';

export default function Footer({page}) {
    //const [isShortBackground, setIsShortBackground] = React.useState(false);

    const isBackgroundFull = () => {
        if (page === 'home') {
            return true;
        }
        if (page === 'cart') {
            return false;
        }
    }

    return (
        <footer>
            <div className={'footer-container'}>
                <div className={`footer-background short`}/>
                <div className={'footer-left'}>
                    <div className={'footer-left-column'}>
                        <div className={'footer-left-column-item'}>
                            Terms and conditions
                        </div>
                        <div className={'footer-left-column-item'}>
                            Privacy policy
                        </div>
                    </div>
                    <div className={'footer-left-column'}>
                        <div className={'footer-left-column-item'}>
                            Shipping Policy
                        </div>
                        <div className={'footer-left-column-item'}>
                            Return policy
                        </div>
                    </div>
                    <div className={'footer-left-column'}>
                        <div className={'footer-left-column-item'}>
                            Refund Policy
                        </div>
                        <div className={'footer-left-column-item'}>
                            Cancellation Policy
                        </div>
                    </div>
                </div>
                <div className={'footer-right'}>
                    <div className={'footer-logo'}/>
                    <div className={'footer-right-item'}>
                        Address address address address address
                    </div>
                    <div className={'footer-right-item'}>
                        Single phone: +7 (000) 000 00 00
                    </div>
                    <div className={'footer-right-item'}>
                        E-mail: email@yandex.ru
                    </div>
                    <div className={'footer-socials'}>
                        <div className={'footer-socials-item youtube'}/>
                        <div className={'footer-socials-item tg'}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}