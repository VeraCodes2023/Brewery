import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useDebounce from './hooks/useDebounce'
import useFetch from './hooks/useFetch';
import Home from './components/Home/Home';
import BeweryCard from './components/Home/SingleBrewery'
import Aboutus from './components/Aboutus/Aboutus'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  const [searchValue,setSearchValue]=useState("")
  const debouncedSearchValue=useDebounce(searchValue,550)
  const url = "https://api.openbrewerydb.org/v1/breweries"
  const {loading,error,data} = useFetch (url)
  const getSearchData=()=>{
    if(debouncedSearchValue && debouncedSearchValue !==undefined){
      const seacrhData=data.filter(item=>item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()))
      return seacrhData}
  }
  const searchData=getSearchData()
  return (
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/'   
              element={<Home 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading}
                data={data}
                error={error}
                searchData={searchData}
            />}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
            <Route path='/contact' element={<Contact/> }></Route>
            <Route path='/details/:BeweryId' 
              element={<BeweryCard  
                loading={loading}
                data={data}
                error={error}
            />}></Route>
            <Route path='*' element={<NotFound/> }></Route>
        </Routes>
        <Footer/>
    </BrowserRouter> 
  )
}

export default App