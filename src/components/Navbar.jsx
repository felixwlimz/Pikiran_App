import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
      <div className="p-4 bg-blue-400 w-100">
        <div className="container-lg flex flex-row justify-between">
          <div className="mx-3 font-semibold text-xl">Pikiran</div>
          <ul className="flex flex-row gap-4 mx-3">
            <li className="block px-2"><Link to="/" className="text-white">Home</Link></li>
            <li className="block px-2"><Link to="/consult" className="text-white">Consult</Link></li>
            <li className="block px-2"><Link to='/pricing' className="text-white">Pricing</Link></li>
            <li className="block px-2"><Link to='/articles' className="text-white">Articles</Link></li>
            <li className="block px-2"><a href="#" className="text-white">About</a></li>
          </ul>
        </div>
      </div>
    )
}