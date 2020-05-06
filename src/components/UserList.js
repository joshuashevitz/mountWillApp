import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import MainLayout from './MainLayout';
import axios from 'axios';
import styled from 'styled-components';
const TableofUsers = styled(Container)`
width: 100vw;
height: 100vh;

justify-content: center;
align-item: center:
`;
const RowDesign = styled.tr`
border-bottom: 1px solid #dddddd;
nth-child(2) {bacground-color: #f3f3f3}
`;
const DataCell = styled.td`
font-size: 2rem;
padding: 12px 15px;
font-weight: bold; 
`;
const TableHeaders = styled.th`
padding: 12px 15px;
background-color: slateblue;

`;
const TableDesign = styled.thead`
font-size: 2.5rem;
`;
const Design = styled.table`
background-color: white;
border-collapse: collapse;
border: 1px solid black;
padding: 10px;
box-shadow: 15px 25px #888888;
overflow: scroll;
opacity: .8;
height: 90vh;
border-bottom: 2px solid slateblue;
`;
const UserList =()=> {

    const [users, setUsers] = useState([]);
    useEffect( () => {
       axios.get(`http://localhost:5000/users/`)
       .then(({data})=> { setUsers(data);
       })
       .catch((error) => {
           console.log(error);
       })
        }, []);

        const renderTable = () => {
            return users.map(user => {
              return (
                <RowDesign>
                  <DataCell>{user.username}</DataCell>
                  <DataCell>{user.address}</DataCell> 
                  <DataCell>{user.loanrequest}</DataCell> 
                </RowDesign>
              )
            })
          }

    return (
        <MainLayout title="Application page" color="background-color: -webkit-linear-gradient(70deg, #252c68 40%, white 40%);
    background: -o-linear-gradient(70deg, blue 40%, white 40%);
    background: -moz-linear-gradient(70deg, Blue 40%, white 40%);
    background: linear-gradient(70deg, blue 40%, white 40%);;">
            
            <TableofUsers>
                <h1> Applicants</h1>
            <Design>
                <TableDesign> 
                    <tr>
                        <TableHeaders>Applicant Names</TableHeaders>
                        <TableHeaders>Address </TableHeaders>
                        <TableHeaders>loan Amount</TableHeaders>
                    </tr>
                </TableDesign>
                <tbody>{renderTable()}</tbody> 
               
            </Design>
            </TableofUsers>
        </MainLayout>
    );
}

export default UserList;

