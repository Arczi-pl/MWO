import LeftMenu from '../components/LeftMenu'
import Navbar from '../components/Navbar'
import MainWrapper from '../components/MainWrapper'
import Products from '../components/Products'

export default function Home(props) {
  return(
    <>
      <Navbar />
      <LeftMenu data={props.categories} /> 
      <MainWrapper>
        <Products data={props.products} header="Products" />
      </MainWrapper>
    </>
  )
}

export async function getServerSideProps() {
  
  return {
    props: {
      products: [
        {
          slug: "p1",
          name: "product1",
          img: "",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "$9.99"
        },
        {
          slug: "p2",
          name: "product2",
          img: "",
          desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          price: "$9.99"
        },
        {
          slug: "p3",
          name: "product3",
          img: "",
          desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
          price: "$9.99"
        },
        {
          slug: "p4",
          name: "product4",
          img: "",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          price: "$9.99"
        }
      ],

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