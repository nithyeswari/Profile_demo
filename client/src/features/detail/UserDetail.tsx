

import { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
const UserDetail = (props: { onSubmit: any }) => {
    const { onSubmit } = props
    const [page, setPage] = useState(1);
    
    return (

        <div> 
            {page === 1 &&
                <Step1Form
                    handleSubmit={(data: any) => {
                        console.log(data);
                        setPage(2)
                    }} />
            }
            {page === 2 &&
                <Step2Form
                    handleSubmit={(data: any) => {
                        console.log(data);
                        setPage(3)
                    }}
                    prevPage={() => setPage(1)}
                />
            }
            {page === 3 &&
                <Step3Form
                    handleSubmit={onSubmit}
                    prevPage={() => setPage(2)}
                />
            }
        </div>
    )

};


export default UserDetail;