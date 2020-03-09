import { useEffect } from "react";

var user = "ehre";

function useAccount() {

    
    useEffect(() => {
        console.log("");
    }, [user]);
    return [user, (lel) => {user=lel;}];
}

export default useAccount;