import Image from 'next/image'

export default function Item(props){
    return (
        <>
            <a target="_blank" href={props.link}>
                <div className='mx-1 bg-gray-100 w-32 h-32 rounded-full overflow-hidden relative transition-all cursor-pointer hover:scale-125'>
                    <Image
                    src={props.logo}
                    alt=""
                    width={90}
                    height={90}
                    className='mx-auto absolute top-2/4 left-0 right-0 -translate-y-2/4'
                    />
                </div>
            </a>
        </>
    )
}