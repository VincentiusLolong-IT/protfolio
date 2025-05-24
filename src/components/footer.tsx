'use client';

import Image from 'next/image';
import Link from 'next/link';
import './footer.css'
import Button64 from './button/blue-button';

interface socialMediaStructure {
  name: string,
  url: string,
  image: string
}

const soCialMedida: socialMediaStructure[] = [
  {
    name: 'VincentiusLolong-IT',
    url: 'https://github.com/VincentiusLolong-IT',
    image: '/images/github-logo.png',
  },
  {
    name: 'vincent_lolong',
    url: 'https://www.instagram.com/vincent_lolong/',
    image: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png',
  },
  {
    name: 'vincentius.lolong',
    url: 'https://www.facebook.com/vincentius.lolong/',
    image: '/images/facebook.png',
  },
  {
    name: '@vincent.lolong3',
    url: 'https://medium.com/@vincent.lolong3',
    image: '/images/medium.png'
  },{
    name: 'vincentius-lolong',
    url: 'https://www.linkedin.com/in/vincentius-lolong/',
    image: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png'
  }
]

export default function FooterTabs() {
    return (
    <footer id='footer'>
        <div className="media">
            <h2 className="media-title">Social Media / Website</h2>
            <div className="wrap-media">
            {soCialMedida.map((media, idx) => (
                <div className="social" key={idx}>
                <Image
                    src={media.image}
                    alt={media.name}
                    width={200}
                    height={200}
                    className="icon"
                />
                <Link href={media.url} target="_blank" rel="noopener noreferrer">{media.name}</Link>
                </div>
            ))}
            </div>
        </div>
        <div className='contact'>
            <p>If you Interested, you can contact me</p>
            <div className='email'>
              <Image
                src={'/images/gmail.png'}
                alt={'email'}
                width={200}
                height={200}
                className="icon-gmail"
              ></Image>
              <p>vincentjobacc23@gmail.com</p>
            </div>
            <p>Hit the button @_@</p>
            <Button64 onClick={() => alert('Clicked!')}>Contact</Button64>
        </div>
    </footer>
    )
}