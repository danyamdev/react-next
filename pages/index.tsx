import { Button, HTag } from "@/components";

export default function Home() {
  return (
    <>
      <HTag tag="h1">Text</HTag>
      <Button view="primary">Узнать подробнее</Button>
      <Button view="ghost">Читать отзывы</Button>

      <Button view="primary" arrow="down">Узнать подробнее</Button>
      <Button view="ghost" arrow="right">Читать отзывы</Button>
    </>
  );
}
