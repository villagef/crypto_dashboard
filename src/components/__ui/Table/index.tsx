import React, { FC, memo } from 'react';

interface IDataProps {
    id: number | string,
    name: string,
    shortName: string,
    amount: number,
    pricePLN: number,
    priceUSD: number,
    purchaseDate: string,
}

interface ITableProps {
    headerTitle: string,
    data: IDataProps[]
}

const Table: FC<any> = (props) => {
  return (
    <div style={{gridArea: props.gridArea, border: "1px solid black"}}>Table</div>
  )
}

export default memo(Table);