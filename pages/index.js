import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import Work from '../components/Work';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian Sasis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='py-16'>
          <div className='text-2xl md:text-7xl text-center '>
            <Typewriter
              options={{
                strings: ['Hi!', "I'm Christian Sasis"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <Work/>
          <Projects/>
        </div>
      </main>
    </div>
  )
}
