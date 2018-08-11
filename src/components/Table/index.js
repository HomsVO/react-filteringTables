import React from 'react';


const Table =(props) => {
    const tableItems = props.data.map(t =>{
            return(
                <tr key={t.id}><td>{t.id}</td><td>{t.value}</td><td>{t.type}</td><td>{t.date}</td></tr>
            )
        })


        return(
            <table>
                <tbody>
                    <tr><td>id</td><td>value</td><td>type</td><td>date</td></tr>
                    {tableItems}
                </tbody>    
            </table>
              
        )
}
export default Table;