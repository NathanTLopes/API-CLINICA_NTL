import React from "react";
import styles from "./page.module.css";
export const metadata = {
  title: "Clinica NTL",
  description: "Clinica Médica",
  charset: "UTF-8",
  author: "Nathan Teixeira Lopes",
  keywords: "HTML, CSS, JavaScript, React, Next.js",
};
const Home = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.glass}>
          <div className={styles.desing}>
            <h2 className={styles.titulo}>Bem-vindo à CLINICA NTL</h2>
            <p className={styles.paragrafo}>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar 👨‍⚕️👩‍⚕️💊.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;