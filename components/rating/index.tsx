import { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import StartIcon from '@/components/rating/star.svg';

import { IRatingProps } from '@/components/rating/props';

import styles from '@/components/rating/rating.module.css';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray: JSX.Element[] = ratingArray.map((r, i) => (
      <StartIcon
        className={cn(styles.start, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        tabIndex={isEditable ? 0 : -1}
        onClick={() => onClick(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onMouseEnter={() => changeDisplay(i + 1)}
        onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
      />
    ));

    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
