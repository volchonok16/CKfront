import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { Cross } from 'Assets/svg';

export const DeleteNew = React.memo((props: any) => {
  let onClickDeleteNew = () => {
    props.deleteNew(props.newId);
    props.onCrossClick();
  };

  return (
    <section className="delete-new">
      <Cross onCrossClick={props.onCrossClick} />
      <div>
        Вы действительно хотите удалить новость (<strong>{props.newId}</strong>)?
      </div>
      <Button className="delete-new__button" onClick={onClickDeleteNew}>
        Подтвердить
      </Button>
    </section>
  );
});
