import Head from "next/head";
import ReadFirestore from "../../firebase/readFirestore";


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
        <ReadFirestore />
        <form className="add" > 
        <label for="forename">Forename:</label>
        <input type="text" name="forename" required />
        <label label for="surname">Surname:</label>
        <input type="text" name="surname" required />
        <button>Enroll Cadet</button>
        </form>

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

