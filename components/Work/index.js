import Image from 'next/image'
import acLogo from '../../public/AmberLogo.png'
import cdiLogo from '../../public/cdi.png';
import intervennLogo from '../../public/intervenn-logo-full.svg';
import Item from '../Item';

export default function Work() {
    return (
        <>
            <div className='text-center py-10 mt-16'>
                <h1 className='text-2xl lg:text-4xl text-neutral-500'>Work</h1>
                <div className='inline-flex flex-wrap justify-center lg:items-center px-5 lg:text-center py-10'>
                    <div className='mx-0 lg:mx-5 pb-0 lg:pb-0'>
                        <Item link="https://carbondigitalinc.com/" logo={cdiLogo} alt="Carbon Digital"/>
                    </div>
                    <div className='mr-0 lg:mx-5 pb-0 lg:pb-0'>
                        <Item link="https://ambercreative.sg/" logo={acLogo} alt="Carbon Digital"/>
                    </div>
                    <div className='ml-0 lg:mx-5'>
                        <Item link="https://intervenn.com/" logo={intervennLogo} alt="Intervenn BioSciences"/>
                    </div>
                </div>
            </div>
        </>
    )
}