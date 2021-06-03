import React  from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CWidgetProgress
} from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol xs="12" sm="6" lg="3">
              <CWidgetProgress inverse color="success" variant="inverse" header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
            </CCol>
            <CCol xs="12" sm="6" lg="3">
              <CWidgetProgress inverse color="info" variant="inverse" header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
            </CCol>
            <CCol xs="12" sm="6" lg="3">
              <CWidgetProgress inverse color="warning" variant="inverse" header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
            </CCol>
            <CCol xs="12" sm="6" lg="3">
              <CWidgetProgress inverse color="danger" variant="inverse" value={95} header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
