import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, Inject } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

import { employeesData, employeesGrid } from '../data/dummy';


const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* Header */}
      <Header title="Employees" category="Page"/>
      {/* Table */}
      <GridComponent
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
        {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employee
