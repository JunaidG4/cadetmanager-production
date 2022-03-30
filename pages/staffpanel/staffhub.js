import Head from "next/head";
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { cadets: data }
    }
}

const StaffHub = ({ cadets }) => {
    return ( 
        <>
        <Head>
            <title>CMS | Staff Hub</title>
        </Head>
        <div>
            <h1>Welcome to Staff Hub</h1>
            {cadets.map(cadet => (
                <div className="cadetnames">
                    <div key={cadet.id}> 
                        <a>
                            <h3>CDT { cadet.name }</h3>
                            <h4>Username: { cadet.username }</h4>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default StaffHub;