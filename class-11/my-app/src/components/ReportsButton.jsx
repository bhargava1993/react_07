import { useState } from "react";


function ReportsButton(){

    const [Reports, SetReports] = useState(null);

    const loadReports = async ()=>{
        const module = await import("../pages/Reports");
        SetReports(()=>module.default)
    }

    return(
        <>
            <button onClick={loadReports}>
                Load Reports
            </button>

            { Reports && <Reports />}
        </>
    )
}

export default ReportsButton;


