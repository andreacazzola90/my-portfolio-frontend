import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="flex-1">
                    <Link href="/index" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};
export default Navbar;