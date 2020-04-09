import React from 'react';
import block from 'bem-cn';
import { Button, IconDocAdd, IconSearch } from '@gpn-design/uikit';
import Field from '../Field/Field';
import ListItem from './ListItem/ListItem';

import './styles.css';

const b = block('PipelineStageCard');
const d = block('decorator');

const PipelineStageCard = (props) => {
  const { view, modules, className } = props;

  return (
    <div className={ b({view}) }>
      <header className={ b('Header').mix( d({'space-l': 'xs'}) ) }>
        <Field width='full' view='clear' size='xs' type='text' placeholder='Поиск' leftSide={IconSearch} />
        <Button 
          size='xs' 
          view='clear' 
          iconLeft={IconDocAdd} 
          onlyIcon={true} 
          // iconSize='s'
          label='Загрузить документ' 
          form='brick'
        />
      </header>
      <div className={ b('Modules') }>
        <div className={ b('List') }>
          {modules.map((module) => <ListItem preview={view === 'create'} status={module.status}>{module.label}</ListItem>)}
        </div>
      </div>
    </div>
  )
};

export default PipelineStageCard;