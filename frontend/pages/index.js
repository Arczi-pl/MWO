import LeftMenu from '../components/LeftMenu'
import Navbar from '../components/Navbar'
import MainWrapper from '../components/MainWrapper'

export default function Home(props) {
  return(
    <>
      <Navbar />
      <LeftMenu data={props.categories} /> 
    
      <MainWrapper></MainWrapper>
    </>
  )
}

export async function getServerSideProps() {
  
  return {
    props: {
      categories: [
        {
          slug: "cat1",
          name: "placeholder1"
        },
        {
          slug: "cat2",
          name: "placeholder2"
        },
        {
          slug: "cat3",
          name: "placeholder3"
        },
        {
          slug: "cat4",
          name: "placeholder4"
        },
        {
          slug: "cat5",
          name: "placeholder5"
        }
      ]
    }
  }

  //can't fetch from no API :'c
  /*const { API_URL } = process.env
  const res = await fetch(`${API_URL}/categories`)
  const data = await res.json()

  return {
    props: {
      categories: data,
    }
  }*/
}