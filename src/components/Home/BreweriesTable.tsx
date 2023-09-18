import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import NoDataMatch from '../utiles/NoDataMatch';

interface Column {
  id: 'name' | 'phone' | 'address' | 'website'| 'more';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 170},
  { id: 'address', label: 'Address',minWidth: 170},
  { id: 'website',label: 'Website',minWidth: 170},
  { id: 'more',label: 'More',minWidth: 100}
];

interface dataProps{
  id:string,
  name:string,
  phone:string,
  street: string,
  state:string,
  country:string,
  website_url: string
}

interface BeweriesTableprops{
  data:dataProps[],
  searchData:dataProps[]
}

const  BreweriesTable:React.FC <BeweriesTableprops> = (props) =>{
  const {data,searchData}=props
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '70%', overflow: 'hidden', margin:"auto", 
      marginTop:1, marginBottom:9}}>
      <TableContainer sx={{ maxHeight: 400 }}>
      {searchData && searchData.length <1 ? <NoDataMatch/> :null}
        <Table stickyHeader aria-label="sticky table">
          <TableHead  >
            <TableRow>
         
              {columns.map((column) => (
                <TableCell
                  sx={{fontWeight:"bold"}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
      
          {searchData? searchData.map(
            (row)=>(
              <TableRow key={row.id} >
                  <TableCell sx={{color:"#1976D2"}}>{row.name}</TableCell>
                  <TableCell sx={{color:"#1976D2"}}>{row.phone? row.phone: "No Phone Number"}</TableCell>
                  <TableCell sx={{color:"#1976D2"}}>{`${row.street}, ${row.state}, ${row.country}`}</TableCell>
                  <TableCell>
                    <Button
                      href={row.website_url}
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Website
                    </Button>
                </TableCell>
                <TableCell>
                    <Link className="tag" to={`/details/${row.id}`}>View More</Link>
                </TableCell>
              </TableRow>
            )
          ):null}
          {data && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone? row.phone: "No Phone Number"}</TableCell>
              <TableCell>
                {`${row.street}, ${row.state}, ${row.country}`}
              </TableCell>
              <TableCell>
                    <Button
                      href={row.website_url}
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Website
                    </Button>
              </TableCell>
              <TableCell>
                  <Link className="tag" to={`/details/${row.id}`}>View More</Link>
              </TableCell>
            </TableRow>
             ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default BreweriesTable