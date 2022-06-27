import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className='cont-footer'>
                <div className='top-footer'>
                    <Image src='/logo.png' width={48} height={48} />
                </div>
                <div className='col'>
                    <div className='rows'>
                        <p className='title'>Population Services International</p>
                        <div className='ico'>
                            <Image src='/location.png' width={16} height={16} />
                        </div>
                        <div className='str'>
                            <p>1120 19TH STREET, NW, SUITE 600, WASHINGTON, DC 20036</p>
                        </div>
                        <div className='ico'>
                            <Image src='/call.png' width={16} height={16} />
                        </div>
                        <div className='str'>
                            <p>(202)785-0072</p>
                        </div>

                    </div>
                    <div className='rows'>
                        <p className='title'>Population Service International in Vietnam</p>
                        <div className='ico'>
                            <Image src='/location.png' width={16} height={16} />
                        </div>
                        <div className='str'>
                            <p>11th floor, VINAFOR Building, 127 Lo Duc Street, Hai Ba Trung District, Hanoi, Vietnam</p>
                        </div>
                        <div className='ico'>
                            <Image src='/call.png' width={16} height={16} />
                        </div>
                        <div className='str'>
                            <p>+84-24-3944-6326</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <p className='title'>About us</p>
                    <p>Service Pack</p>
                    <p>Clinical</p>
                    <p>Symptom</p>
                </div>
                <div className='col'>
                    <p className='title'>Overview</p>
                    <p>Symptom Checker</p>
                    <p>Provider Locator</p>
                </div>
                <div className='col'>
                    <p className='title'>Social Media</p>
                    <div className='social-link'>
                        <Image src='/facebook-negative.png' width={20} height={20} />
                    </div>
                    <div className='social-link'>
                        <Image src='/twitter-negative.png' width={20} height={20} />
                    </div>
                    <div className='social-link'>
                    <Image src='/instagram-negative.png' width={20} height={20} />
                    </div>
                    <div className='social-link'>
                    <Image src='/youtube-negative.png' width={20} height={20} />
                    </div>
                </div>
            </div>

            <div className="bottom">Copyright 2022 All Rights Reserved</div>
        </footer>
    );
}

export default Footer;