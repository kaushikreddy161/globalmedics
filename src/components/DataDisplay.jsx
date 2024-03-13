import { Table } from 'react-bootstrap';
import { createClaimsTable } from '../utils/claimUtils';

export const IdTokenData = (props) => {

    console.log("props:", props);
    // const tokenClaims = createClaimsTable(props.idTokenClaims);

    // const tableRow = Object.keys(tokenClaims).map((key, index) => {
    //     return (
    //         <tr key={key}>
    //             {tokenClaims[key].map((claimItem) => (
    //                 <td key={claimItem}>{claimItem}</td>
    //             ))}
    //         </tr>
    //     );
    // });
    return (
        <>
            <div className="data-area-div">
             
                <div className="data-area-div">
                     <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Family Name</th>
                                <th>Given Name</th>
                            </tr>
                        </thead>
                        {/* <tbody>{tableRow}</tbody> */}
                        <tbody>
                            <tr>
                             <td>{props.idTokenClaims.sub}</td>
                             <td>{props.idTokenClaims.family_name}</td>
                             <td>{props.idTokenClaims.given_name}</td> 
                            </tr>
                        </tbody>
                    </Table>
                  
                </div>
            </div>
        </>
    );
};
