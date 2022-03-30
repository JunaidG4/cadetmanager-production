import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { cadets: data }
    }
}

const StaffHub = ({ cadets }) => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push('/staffpanel/enrolledCadets')
    }

    return ( 
        <>
        <Head>
            <title>CMS | Staff Hub</title>
        </Head>
        <div>
            <h1>Welcome to Staff Hub</h1>
                <div className="enrolledbox">
                    <h2 className="enrolled">Enrolled Cadets: { cadets.length }</h2>
                    <div className="action">
                        <button class="button-81" type="button" onClick={handleClick}>View Cadets</button>
                    </div>  
                </div>
                    
        </div>
        </>
     );
}
 
export default StaffHub;


