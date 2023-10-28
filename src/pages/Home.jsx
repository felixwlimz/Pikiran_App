import { Navbar } from "../components/Navbar"
import { Welcome } from "../sections/HomeComponents/Welcome"
import { Happiness } from "../sections/HomeComponents/Happiness"
import { Article } from "../sections/HomeComponents/Article"

export const Home = () => {
  return (
    <div>
    <Navbar/>
    <Welcome/>
    <Happiness/>
    <Article/>
    </div>
  )
}
