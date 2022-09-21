import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find( (coffeeStore) => {
        return coffeeStore.id.toString() === params.id
      })
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" }}],
    fallback: false,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();
  const { id } = router.query;

  if (props.fallback) {
    return <div>Loading ...</div>
  }

  const { address, name, neighbourhood } = props.coffeeStore; 

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a> back to home </a>
      </Link> 
      <p>{name}</p>
      <p>{address}</p>
      <p>{neighbourhood}</p>
    </div>
  )
};

export default CoffeeStore;