import {useParams} from 'react-router-dom';
import BackHomePageBtn from '../utiles/BackHomePageBtn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ErrorAlert from '../utiles/ErrorAlert'
import Loading from '../utiles/Loading'

const SingleBewery = (props) => {
  const {data, loading,error}=props
  const {BeweryId} =  useParams()
  const singleBewery= data && data.find(i=>i.id===BeweryId)

  return (
    <List sx={{ width:"40%" ,margin:"auto", 
          borderTop:"1px solid lightgrey",  
          borderBottom:"1px solid lightgrey",
          marginBottom:10
      }}>
         {error && !loading && (
         <ErrorAlert/>
        )}
        {!error && loading && (
          <Loading/>
        )}
        <ListItem>
            <Typography variant="h6"   sx ={{marginBottom:2, marginTop:2}}>More Info</Typography>
        </ListItem>
        <ListItem>
            <BusinessIcon/>&nbsp; {singleBewery && singleBewery.name}
        </ListItem>
        <ListItem>
          <LocationOnIcon/>&nbsp;
          {singleBewery && singleBewery.street}&nbsp;  
          {singleBewery && singleBewery.city}&nbsp;
          {singleBewery && singleBewery.state}&nbsp;
          {singleBewery && singleBewery.country}
          </ListItem>
        <ListItem>
          Postal Code: {singleBewery && singleBewery.postal_code}</ListItem>
        <ListItem>Type: {singleBewery && singleBewery.brewery_type}</ListItem>
        <ListItem>
            <BackHomePageBtn/>
        </ListItem>
    </List>
  )
}

export default SingleBewery;