import React from 'react'
import {useParams} from 'react-router-dom';
import AdminTable from '../AdminTable/AdminTable-component';
import AdminDecorate from '../AdminDecorate/AdminDecorate-component';
import AdminDetails from '../AdminDetails/AdminDetails-component';

function AdminTab() {
    const {AdminTab} = useParams()
    switch (AdminTab) {
        case "AdminTable":
            return <AdminTable/>;
        case "AdminDecorate":
            return <AdminDecorate/>;
        case "AdminDetails":
            return <AdminDetails/>;
    }
}

export default AdminTab;
