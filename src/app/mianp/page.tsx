import Image from "next/image";
import "./mianp.css"
export default function Mainp(){
    return (
    <section className="section-home">
        <Image src="/favicon.ico" alt="salam" width={100} height={100} className="img-home"></Image>
    </section>
    );
}