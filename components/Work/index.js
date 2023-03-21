export default function Work(props) {
    const item = props.data;
    return (
        <>
            <div className='py-4'>
              <div className='mb-1'>
                <h3 className='text-gray-400'>{item.date}</h3>
              </div>
              <div>
                <h3 className='text-lg'>{item.position} at <a href={item.company_link} className='font-bold hover:underline' target="_blank">{item.company}</a> </h3>
                <h6 className='text-sm text-gray-600'>{item.location}</h6>
                <p className='text-sm text-gray-500 mt-1'>
                    {item.description}
                </p>
              </div>
            </div>
        </>
    )
}