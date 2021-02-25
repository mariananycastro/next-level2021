import { CompletedChallenges } from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>
          Inicio da aplicação | aba navegação
        </title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
