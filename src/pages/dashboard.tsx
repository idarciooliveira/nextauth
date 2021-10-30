import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { getAPIClient } from "../services/axios";

const Dashboard : React.FC = ()=>{

    const {user} = useContext(AuthContext);
    return(
        <div>
            <h2>Dashboad {user?.username}</h2>
        </div>
    )
}

export default Dashboard


export const getServerSideProps: GetServerSideProps = async(context)=>{

    const apiClient = getAPIClient(context);

    const { 'nextauth.token': token } = parseCookies(context);


    if(!token){
        return{
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

   // await apiClient.get('/users')

    return {
        props: {}
    }
} 