import BreweriesTable from './BreweriesTable'
import SearchInput from '../Search/SearchInput';
import ErrorAlert from '../utiles/ErrorAlert'
import Loading from '../utiles/Loading';
import { Box } from '@mui/material';


const Home = (props) => {

  const {searchValue,setSearchValue,error, loading, data,searchData}=props

  return (
    <Box>
        {error && !loading && (
         <ErrorAlert/>
        )}
        {!error && loading && (
          <Loading/>
        )}
        <SearchInput  searchValue={searchValue}  setSearchValue={setSearchValue}/>
      {
          data && !error && !loading &&  <BreweriesTable data={data}  searchData={searchData}/>
      }
    
    </Box>
  )
}

export default Home