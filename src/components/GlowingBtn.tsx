import Link from 'next/link';
import './glowingBtn.css'

const GlowingBtn = () => {
    return (
        <Link href="/dashboard" className='ml-16 '>
            <button className='glowing-btn'>
                <span className='glowing-txt'>
                    Mr
                    <span className='faulty-letter'>
                        M
                    </span>
                    an
                    <span className='faulty-letter'>
                    ik   
                    </span>
                </span>
                <span className='glowing-txt'>
                    &nbsp; &nbsp;H
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