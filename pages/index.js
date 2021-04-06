import { web } from '../web'
import Head from 'next/head';
import axios from 'axios';

export default Build

function Build({ web, json }) {
  console.log({json})
  return (
    <>
      <section id="web">
        <h2>Web</h2>
        <Head>
          <title key="title">たいとる</title>
        </Head>
        {web.map(site => (
          <div data-comment={site.comment}>
            <iframe frameborder="0" decoding="async" loading="lazy" sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts" src={site.url}>{site.comment}</iframe>
          </div>
        ))}
      </section>
    </>
  );
}

// ビルド時に実行される
export async function getStaticProps() {
  const userInfoSource = await axios.get('https://www.instagram.com/y20010920t/')
  const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
  const json = JSON.parse(jsonObject)

  

  return {
    props: {
      web,json
    }
  };
}
