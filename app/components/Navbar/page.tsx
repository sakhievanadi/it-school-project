"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useEffect } from "react";

export default function Navbar() {

    useEffect(() => {
        const list = document.querySelectorAll(`.${styles.list}`);
        const indicator = document.querySelector(`.${styles.indicator}`) as HTMLElement;

        function activeLink(this: HTMLLIElement) {
            list.forEach((item) =>
            item.classList.remove(`${styles.active}`));
            this.classList.add(`${styles.active}`);

            // Перемещаем индикатор
            const index = Array.from(list).indexOf(this);
            const offset = index * 85; // 70px ширина + 15px gap
            if (indicator) {
                indicator.style.transform = `translateX(${offset}px)`;
            }
        }

        list.forEach((item) =>
        item.addEventListener('click', activeLink));

        return () => {
            list.forEach((item) =>
            item.removeEventListener('click', activeLink));
        }
    }, []);

    return (
        <div className={`flex justify-center items-center ${styles.navigation}`}>
            <nav className="relative w-150 bg-amber-50 flex justify-center pt-2 rounded-xl">
                <ul className="flex width-350">
                    <li className={`${styles.active} ${styles.list}`}>
                        <Link href="" className="">
                            <span className="">
                                <Image src='/home-outline.svg' alt="Home" width='22' height='22'></Image>
                            </span>
                            <span className={`${styles.text}`}>Главная</span>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="" className="">
                            <span className="">
                                <Image src='/chatbubble-ellipses-outline.svg' alt="Home" width='22' height='22'></Image>
                            </span>
                            <span className={`${styles.text}`}>
                                О нас
                            </span>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="" className="">
                            <span className="">
                                <Image src='/book-outline.svg' alt="Home" width='22' height='22'></Image>
                            </span>
                            <span className={`${styles.text}`}>
                                Курсы
                            </span>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="" className="">
                            <span className="">
                                <Image src='/call-outline.svg' alt="Home" width='22' height='22'></Image>
                            </span>
                            <span className={`${styles.text}`}>
                                Контакты
                            </span>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="" className="">
                            <span className="">
                                <Image src='/chatbox-ellipses-outline.svg' alt="Home" width='22' height='22'></Image>
                            </span>
                            <span className={`${styles.text}`}>
                                Позвонить
                            </span>
                        </Link>
                    </li>
                    <div className={`${styles.indicator}`}></div>
                </ul>
            </nav>
        </div>
    )
}