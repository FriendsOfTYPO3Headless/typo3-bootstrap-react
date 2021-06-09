import React from 'react';

const Table: React.FC<{ data: any }> = props => {
    console.log('moinsen')
    console.log(props.data)
    console.log(props.data.bodytext[0][0])
    // type string
    return <div className="table">
        {Object.keys(props.data.bodytext).map((ARRAY1) => {
                Object.keys(props.data.bodytext[ARRAY1]).map((ARRAY2) => {
                    {props.data.bodytext[ARRAY1][ARRAY2]}

                    if (props.data.bodytext === true) {

                    }

                    if (props.data.headerPosition === 1) {

                    } else {

                    }
                    if (props.data.tabelTfoot) {


                    }

                })

        })}


        {/*

        <f:if condition="{table}">
        <div class="table-responsive">
            <table class="table{f:if(condition: data.table_class, then: ' table-{data.table_class}')}">
                <f:if condition="{data.table_caption}">
                    <caption>{data.table_caption}</caption>
                </f:if>
                <f:for each="{table}" as="row" iteration="rowIterator">
                    <f:if condition="{rowIterator.isFirst}">
                        <f:then>
                            <f:if condition="{data.table_header_position} == 1">
                                <f:then>
                                    <thead>
                                </f:then>
                                <f:else>
                                    <tbody>
                                </f:else>
                            </f:if>
                        </f:then>
                        <f:else>
                            <f:if condition="{rowIterator.isLast}">
                                <f:if condition="{data.table_tfoot}">
                                    </tbody>
                                    <tfoot>
                                </f:if>
                            </f:if>
                        </f:else>
                    </f:if>
                    <tr>
                        <f:for each="{row}" as="cell" iteration="columnIterator">
                            <f:render partial="Table/Columns" arguments="{_all}" />
                        </f:for>
                    </tr>
                    <f:if condition="{rowIterator.isFirst}">
                        <f:then>
                            <f:if condition="{data.table_header_position} == 1">
                                </thead>


        */}

    </div>
}
export default Table;
