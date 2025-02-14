import styles from "./Banner.module.css";
import Image from "next/image";
import bannerImage from "../../../public/images/banner.png"; 

const Banner = ({ children }) => {
    return (
      <div className={styles.bannerContainer}>
        <Image src={bannerImage} alt="Banner da Clínica" className={styles.bannerImage} />
        <div className={styles.overlay}>
          {children} {/* Renderiza o conteúdo da Home.js */}
        </div>
      </div>
    );
  };
  
  export default Banner;
