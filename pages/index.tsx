import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '@/layout';
import { Button, HTag, PTag, Rating, Tag } from '@/components';

import { IMenuItem } from '@/interfaces/menu-item.interface';

function Home({ menu }: IHomeProps) {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <div>
        <HTag tag="h1">Text</HTag>
      </div>

      <div>
        <Button view="primary">Узнать подробнее</Button>
        <Button view="ghost">Читать отзывы</Button>
      </div>

      <div>
        <Button view="primary" arrow="down">
          Узнать подробнее
        </Button>
        <Button view="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>

      <div>
        <PTag size="l">
          Студенты освоят не только hard skills, необходимые для работы
          веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
          взаимодействовать в команде с менеджерами, разработчиками и
          маркетологами. Выпускники факультета могут успешно конкурировать с
          веб-дизайнерами уровня middle.
        </PTag>
        <PTag size="m">
          Хорошо структурирован курс, быстрый отклик преподователей, качество
          подачи материала
        </PTag>
        <PTag size="s">
          Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
          ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
          хорошо справляются с нагрузкой, так зачем загонять специалиста в
          душный офис. В этой профессии важным считается вдохновение, поэтому
          дизайнеры ищут его в разных местах.
        </PTag>
      </div>

      <div>
        <Tag>Дизайн</Tag>
        <Tag href="123123123" color="primary" size="m">
          href
        </Tag>
        <Tag color="green" size="s">
          10000
        </Tag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
        <Tag color="gray" size="s">
          10
        </Tag>
      </div>

      <div style={{ background: 'white', padding: '10px' }}>
        isEditable = false
        <Rating rating={3} />
      </div>

      <div style={{ background: 'white', padding: '10px' }}>
        isEditable = true
        <Rating rating={3} isEditable />
      </div>

      <div style={{ background: 'white', padding: '10px' }}>
        isEditable = true and setRating
        <Rating rating={rating} setRating={setRating} isEditable />
      </div>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
