import { Link } from "react-router-dom";
import IdealResultContainer from "../../features/ideal/containers/IdealResultConatainer";
import { useRef } from "react";
import html2canvas from "html2canvas";
import styles from "../../styles/common.module.css";

export default function ResultPage() {
  const captureRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current, {scale: 2});

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "ideal-result.png";

    link.click();
  };


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={handleSaveImage} className={styles.captureButton}>
        画像保存
      </button>
      </div>

      <div ref={captureRef}>
        <IdealResultContainer />
      </div>

      <Link to="/" className={styles.link}>
        トップに戻る
      </Link>
    </div>
  );
}
