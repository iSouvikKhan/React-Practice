import React, { useState } from 'react';

import PackageContext from './Context';

const Provider = (props) => {

    const obj = {
        mname: "learn react",
        agent: "072",
        accept: "nope not accepted"
    }
    const [mission, setMission] = useState(obj);

    // const [mission, setMission] = useState({
    //     mname: "learn react",
    //     agent: "072",
    //     accept: "nope not accepted"
    // });

    return (
        <PackageContext.Provider value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({ ...mission, accept: "Qabool Hae" });
            }
        }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;

// {props.children} is compulsory here