import React, { useState } from 'react';
import block from 'bem-cn';
import { Text } from '@gpn-design/uikit';

const b = block('PipelineStageCard');
const ls = block('pt-list');

const PipelineItem = (props) => {
  const { children, className } = props;
  const [ isChecked, setChecked ] = useState(0);
  const checkItem = () => {
    isChecked === 0 ? setChecked(1) : setChecked(0);
  }

  return (
    <div 
      className={ 
        b('ListItem', { checked: !!isChecked } )
        .mix( [ ls('item'), className] )
      }
      onClick={checkItem}
    >
      <Text as='p' size='s' view='secondary' lineHeight='xs' className={ (b('Label')).toString() }>{children}</Text>
    </div>
  )
};

export default PipelineItem;