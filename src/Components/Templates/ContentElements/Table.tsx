import React from 'react';

const Table: React.FC<{ data: any }> = props => {
    console.log('moin')


    return <div className="table">
        {Object.keys(props.data.bodytext).map((arrayKey)=> {

            {props.data.bodytext[arrayKey]}
            console.log(props.data.bodytext[arrayKey])
                if (props.data.tableCaption === true){
                    {props.data.tableCaption}
                }

            if (props.data.headerPosition === 1){

            } else {

            }
            if (props.data.tabelTfoot ){


            }

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
