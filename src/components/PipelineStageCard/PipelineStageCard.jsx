import React from 'react';
import block from 'bem-cn';
import { IconSearch } from '@gpn-design/uikit';
import Field from '../Field/Field';
import ListItem from './ListItem/ListItem';

import './styles.css';

const modules = [
  { label: 'Оценка эффективных объемов пород' },
  { label: 'Оценка ВНК' },
  { label: 'Оценка геометрического объема ловушки' },
  { label: 'Оценка Кн' },
  { label: 'Оценка объемного коэффициента' },
  { label: 'Оценка по плотности запасов' },
  { label: 'Оценка ВГТРК' },
  { label: 'Оценка гомеопатического объема психушки' },
  { label: 'Оценка SS' },
]

const b = block('PipelineStageCard');
const d = block('decorator');
const ls = block('pt-list');

const PipelineStageCard = (props) => {
  const { className } = props;

  return (
    <div className={ b({}).mix( ls({'space-a': 'xs'}) ) }>
      <header className={ b('Header').mix( d({'space-h': 'xs'}) ) }>
        <Field width='full' view='clear' size='xs' type='text' placeholder='Поиск' leftSide={IconSearch} />
      </header>
      <div className={ b('Modules') }>
        <div className={ b('List') }>
          {modules.map((module) => <ListItem >{module.label}</ListItem>)}
        </div>
      </div>
    </div>
  )
};

export default PipelineStageCard;