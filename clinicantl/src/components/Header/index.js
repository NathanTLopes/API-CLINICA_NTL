'use client';
import { useState } from "react";
import styles from "./Header.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = (menu) => {
        setOpenDropdown(menu);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={"/images/logoHeader.png"} width={160} height={70} alt="CLINICA NTL" />
            </div>

            {/* Botão do menu hambúrguer */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>

            {/* Navegação */}
            <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ""}`}>
                <ul>
                    <li><a href="/">HOME</a></li>

                    <li className={styles.menuitem} onMouseEnter={() => handleMouseEnter("medicos")} onMouseLeave={handleMouseLeave}>
                        <a href="#">MÉDICOS</a>
                        {openDropdown === "medicos" && (
                            <ol className={styles.submenu}>
                                <li><Link href="Medicos">Listar</Link></li>
                                <li><Link href="#">Adicionar</Link></li>
                                <li><Link href="#">Editar</Link></li>
                                <li><Link href="#">Excluir</Link></li>
                            </ol>
                        )}
                    </li>

                    <li className={styles.menuitem} onMouseEnter={() => handleMouseEnter("pacientes")} onMouseLeave={handleMouseLeave}>
                        <a href="#">PACIENTES</a>
                        {openDropdown === "pacientes" && (
                            <ol className={styles.submenu}>
                                <li><Link href="Pacientes">Listar</Link></li>
                                <li><Link href="#">Adicionar</Link></li>
                                <li><Link href="#">Editar</Link></li>
                                <li><Link href="#">Excluir</Link></li>
                            </ol>
                        )}
                    </li>

                    <li className={styles.menuitem} onMouseEnter={() => handleMouseEnter("agendamento")} onMouseLeave={handleMouseLeave}>
                        <a href="#">AGENDAMENTO</a>
                        {openDropdown === "agendamento" && (
                            <ol className={styles.submenu}>
                                <li><Link href="Consultas">Listar Consultas</Link></li>
                                <li><Link href="#">Agendar Consultas</Link></li>
                                <li><Link href="#">Editar Agendamento</Link></li>
                                <li><Link href="#">Cancelar</Link></li>
                            </ol>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
