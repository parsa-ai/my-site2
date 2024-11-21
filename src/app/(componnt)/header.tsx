"use client"
import Menubtn from "./menu-btn";
import './header.css';
import Link from "next/link";
import { useState } from "react";


export default function HPeader() {
    const [isOpen ,setisOpen] =useState(false);
    const toggleModal = () => {
        setisOpen(!isOpen);
    };
    return (
        <header className="head-header">
            <article className="head-article">

                <Link href="#">

                    <h1 className="head-h1">
                        PasraAlavi
                    </h1>
                </Link>
                <ul className= {`head-ul ${isOpen ? 'active-ul' : ''}`}>
                    <Menubtn title={"Home"} url="/home"></Menubtn>
                    <Menubtn title={"Projects"}></Menubtn>
                    <Menubtn title={"Experiences"}></Menubtn>
                    <Menubtn title={"Skills"}></Menubtn>
                    <Menubtn title={"Contact"}></Menubtn>
                </ul>
                <div className={`humber ${isOpen ? 'active' : ''}`} onClick={toggleModal}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
        </header>
    );
}