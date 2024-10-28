import Link from 'next/link';
import './glowingBtn.css'

const GlowingBtn = () => {
    return (
        <Link href="/dashboard" className='md:ml-24'>
            <button className='glowing-btn'>
                <span className='glowing-txt'>
                    M
                    <span className='faulty-letter'>
                        a
                    </span>
                    n
                    <span className='faulty-letter'>
                    ik   
                    </span>
                </span>
                <span className='glowing-txt'>
                     &nbsp;H
                    <span className='faulty-letter'>
                    o
                    </span>
                    ssa
                    <span className='faulty-letter'>
                    in
                    </span>
                </span>
            </button>
        </Link>
    );
};

export default GlowingBtn;