import useAccount from "../hooks/account";

const Index = () => {
    const [acc, setAcc] = useAccount();

    return(
        <p>
            {acc}
            <button onClick={()=>setAcc("4")} name="change"/>
        </p>
    )
};

export default Index;