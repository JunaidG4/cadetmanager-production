import Head from "next/head";
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { cadets: data }
    }
}

const enrolledCadets = ({ cadets }) => {
    return ( 
        <>
        <Head>
            <title>CMS | Enrolled Cadets</title>
        </Head>
        <div>
            <h1>Enrolled Cadets</h1>
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
 
export default enrolledCadets;

