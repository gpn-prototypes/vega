import React, { useState } from 'react';
import block from 'bem-cn';
import { Text, Button, IconSettings } from '@gpn-design/uikit';

const b = block('PipelineStageCard');
const d = block('decorator');

const PipelineItem = (props) => {
  const { status, preview, children, className } = props;
  const [ isChecked, setChecked ] = useState(0);
  const checkItem = () => {
    isChecked === 0 ? setChecked(1) : setChecked(0);
  }

  const moduleHandler = () => {
    if (preview) checkItem();
  }

  return (
    <div 
      className={ 
        b('ListItem', { checked: !!isChecked } )
        .mix( className )
      }
      onClick={moduleHandler}
    >
      <div 
        className={ 
          b('ModuleName', { status })
          .mix( d({'space-l': 'xs', 'space-r': '2xl', 'space-v': 'xs'}) ) 
      }>
        <Text as='p' size='s' view='secondary' lineHeight='xs' className={ (b('Label')).toString() }>{children}</Text>
      </div>
      <div className={ b('Settings').mix(d({'indent-l': 'xs'})) }>
        {preview ? <Button 
          size='xs' 
          view='clear' 
          onlyIcon={true} 
          iconLeft={IconSettings} 
          iconSize='s' 
          label='Настроить модуль'
        /> : ''}
      </div>
    </div>
  )
};

export default PipelineItem;