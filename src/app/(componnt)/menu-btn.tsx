import Link from "next/link";
import "./menu-btn.css"
export default function Menubtn(promps :any ){
    let url = promps.url || "#"; 
    return (
        <li>
            <Link href={url}>{promps.title}</Link>
        </li>
    );
}