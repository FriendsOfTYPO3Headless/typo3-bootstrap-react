import React from 'react';

const Table: React.FC<{ data: any }> = props => {
    console.log('moin')
    console.log(props.data)

let tableCaption =    props.data.tableCaption;
    return <div className="table">

        {props.data.bodytext.map((rowObject) => {
            {props.data.tableCaption}
            return rowObject;



            if (tableCaption) {
                {
                    return tableCaption;
                }
            }
            if (props.data.headerPosition === 1) {

            } else {

            }
            if (props.data.tabelTfoot) {

            }

        })}


    </div>
}
export default Table;
