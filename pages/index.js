import Head from 'next/head';
import Work from '../components/Work';

export default function Home() {
  const works = [
    {
      date: "2022-2023",
      position: "Senior Software Engineer",
      company: "InterVenn Biosciences Inc.",
      location: "Pasig City, Philippines",
      company_link: "https://intervenn.com/",
      description: "Lorem ipsum dolor sit amet consectetur. Ornare sed nisi vitae gravida leo at. Dictumst eros adipiscing ornare sed viverra nulla molestie. Morbi ipsum porttitor egestas nisl quam sit risus eget risus. Nulla elementum pellentesque amet ut at tristique. Felis ut bibendum sed suspendisse amet velit ornare non iaculis. Non viverra imperdiet consequat praesent donec risus sit viverra."
    },
    {
      date: "2018-2022",
      position: "Full Stack Web Developer",
      company: "Amber Creative Ltd. Singapore",
      location: "Singapore",
      company_link: "https://ambercreative.sg/",
      description: "Lorem ipsum dolor sit amet consectetur. Ornare sed nisi vitae gravida leo at. Dictumst eros adipiscing ornare sed viverra nulla molestie. Morbi ipsum porttitor egestas nisl quam sit risus eget risus. Nulla elementum pellentesque amet ut at tristique. Felis ut bibendum sed suspendisse amet velit ornare non iaculis. Non viverra imperdiet consequat praesent donec risus sit viverra."
    },
    {
      date: "2015-2018",
      position: "Front End Web Developer",
      company: "Carbon Digital Inc.",
      location: "Makati City, Philippines",
      company_link: "https://carbondigitalinc.com/",
      description: "Lorem ipsum dolor sit amet consectetur. Ornare sed nisi vitae gravida leo at. Dictumst eros adipiscing ornare sed viverra nulla molestie. Morbi ipsum porttitor egestas nisl quam sit risus eget risus. Nulla elementum pellentesque amet ut at tristique. Felis ut bibendum sed suspendisse amet velit ornare non iaculis. Non viverra imperdiet consequat praesent donec risus sit viverra."
    }
  ];

  const contacts = [
    {
      link: "https://github.com/ChrisSasis",
      title: "Github",
      type: "link"
    },
    {
      link: "chris.sasis15@gmail.com",
      title: "Email",
      type: "email"
    },
  ]
  return (
    <div>
      <Head>
        <title>Christian Sasis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='py-5 px-3 max-w-screen-sm mx-auto'>
          <h1 className='text-2xl font-bold'>Christian Sasis</h1>
          <h3 className='text-gray-400'>Front End Web Developer</h3>
          <div className='my-4'>
            <h2 className='text-lg'>About</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur. Ornare sed nisi vitae gravida leo at. Dictumst eros adipiscing ornare sed viverra nulla molestie. Morbi ipsum porttitor egestas nisl quam sit risus eget risus. Nulla elementum pellentesque amet ut at tristique. Felis ut bibendum sed suspendisse amet velit ornare non iaculis. Non viverra imperdiet consequat praesent donec risus sit viverra.
            </p>
          </div>
          <div>
            <h2 className='text-lg'>Work Experience</h2>
            {
              works.map((item, index) => (
                <Work data={item} key={index}/>
              ))
            }
          </div>
          <div className='mt-4 border-t py-4'>
            <h2 className='text-lg mb-2'>Contact</h2>
            {
              contacts.map(item => (
                <div className='inline-flex w-full pb-2'>
                  <div className='w-2/12 text-gray-400'>
                    {item.title}:
                  </div>
                  <div className='w-10/12'>
                    <a href={item.type === "email" ? 'mailto:'+ item.link : item.link } className="font-medium hover:underline">{item.link}</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  )
}
