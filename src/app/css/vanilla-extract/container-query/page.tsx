import * as styles from "./container-query.css";
import Image from "next/image";

export default function ContainerQueryDemo() {
  const cardData = [
    {
      title: "첫 번째 카드",
      description: "컨테이너 쿼리를 테스트하는 카드입니다.",
    },
    {
      title: "두 번째 카드",
      description: "컨테이너의 너비가 400px 이상이면 레이아웃이 변경됩니다.",
    },
    {
      title: "세 번째 카드",
      description: "반응형 디자인을 컨테이너 단위로 적용할 수 있습니다.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Container Query 데모</h1>
      <p className={styles.description}>
        브라우저 크기를 조절하거나 창을 리사이즈해보세요.
      </p>
      <div className={styles.grid}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
