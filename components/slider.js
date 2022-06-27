import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react';

const Slider = () => {

    return (
        <>

            <div className="slider">
                <div className="carousel">
                    <div className='img_slider' id="slide-1">
                        <img src="/slider1img.jpg" />
                        <div className='title'>
                            <p>Health Care</p>
                            <p>We are for the community</p>
                        </div>
                    </div>
                    <div className='img_slider'  id="slide-2">
                    <img src="/slider2img.jpg" />
                        <div className='title'>
                            <p>The Next Generation Of</p>
                            <p>Clinic &#38; Family Care</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dots'>
                <Link href="#slide-1" scroll={false}>
                    <a></a>
                </Link>
                <Link href="#slide-2" scroll={false}>
                    <a></a>
                </Link>
            </div>

        </>
    );
}

export default Slider;