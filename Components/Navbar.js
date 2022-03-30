import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/RAFAC.PNG" width={128} height={80}/>
            </div>
            <div className="cmstitle">
                <h1>Cadet Management System</h1>
            </div>
            <Link href="/"><a>Landing Site</a></Link>
            <Link href="/cadetpanel"><a>Cadet Login</a></Link>
            <Link href="/staffpanel"><a>Staff Login</a></Link>
        </nav> 
        
    );
}
 
export default Navbar;