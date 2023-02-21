import Image from 'next/image'
import Item from '../Item';
import starbucks from '../../public/SBlogo.png';
import jollymushroom from '../../public/jollylogo.png';
import hitcheedlogo from '../../public/hitcheed.png';
import spirallogo from '../../public/spiral-logo.png';
import equallogo from '../../public/Equal_logo_colour.png';
import naturallogo from '../../public/natural-logo.png';

export default function Projects() {
    return(
        <>
            <div className='text-center py-10'>
            <h1 className='text-2xl lg:text-4xl text-neutral-500'>Projects</h1>
            <div className='inline-flex flex-wrap justify-center lg:items-center px-5 lg:text-center py-10'>
              <div className='mr-0 lg:mx-5 pb-10 lg:pb-0'>
                <Item link="/" logo={starbucks} alt="Starbucks Promotion 2016"/>
              </div>
              <div className='ml-0 lg:mx-5 pb-5 lg:pb-0'>
                <Item link="https://jolly.com.ph/" logo={jollymushroom} alt="Jolly Mushroom"/>
              </div>
              <div className='ml-0 lg:mx-5 pb-5 lg:pb-0 '>
                <Item link="https://hitcheed.com" logo={hitcheedlogo} alt="Hitcheed"/>
              </div>
              <div className='ml-0 lg:mx-5 pb-5 lg:pb-0 '>
                <Item link="https://www.spiralmanila.com/" logo={spirallogo} alt="Spiral Manila"/>
              </div>
              <div className='ml-0 lg:mx-5 pb-5 lg:pb-0 '>
                <Item link="https://www.equalchoice.com.au/" logo={equallogo} alt="Equal Sweetener"/>
              </div>
              <div className='ml-0 lg:mx-5 pb-5 '>
                <Item link="https://www.naturalssweetener.co.nz/" logo={naturallogo} alt="Equal Naturan"/>
              </div>
            </div>
          </div>
        </>
    )
}