import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

function Profile() {

    const { data: session, status } = useSession()
    const router = useRouter()

    let paso = '100%'

    if (status !== 'loading' && status === 'authenticated') {
        let Rut = "A completar"
    }

    return (
        <div className='profile'>
            <div className='cont'>
                <div className='title'>
                    <h1>My Profile</h1>
                </div>
                {session ? (
                    <>
                        <div className='top_lyt'>
                            <h2>Your Information</h2>
                        </div>
                        <div className='top_cta'>
                            <p>Edit</p>
                        </div>
                        <div className='avatar'>
                            <img src={session.user.image} width={100} height={100} />
                        </div>
                        <div className='details'>
                            <div className='data_dtls'>
                                <div className="field_text_num">
                                    <label>Name:</label>
                                    <input type="text" required placeholder='Enter your Name' value={session.user.name} disabled/>
                                    <div className='helptext'></div>
                                </div>
                                <div className="field_text_num">
                                    <label>Email Address:</label>
                                    <input type="email" required placeholder='Enter your email address' value={session.user.email} disabled/>
                                    <div className='helptext'></div>
                                </div>
                                <div className="field_text_num">
                                    <label>Phone Number:</label>
                                    <input type="number" required placeholder='Enter your phone number' />
                                    <div className='helptext'></div>
                                </div>
                                <div className="field_text_num">
                                    <label>Password:</label>
                                    <input type="text" required placeholder='Enter your password' />
                                    <div className='helptext'></div>
                                </div>
                                <div className="field_date">
                                    <label>Birth Date:</label>
                                    <input type="date" required placeholder='Enter Your birth date' />
                                </div>
                                <div className="field_text_num">
                                    <label>Sex at birth:</label>
                                    <input type="text" required placeholder='Enter your sex at birth' />
                                    <div className='helptext'></div>
                                </div>
                            </div>
                            <button>Save</button>
                        </div>


                    </>) : (<p>Not enabled to edit</p>)}
            </div>
        </div>
    )
}

export default Profile