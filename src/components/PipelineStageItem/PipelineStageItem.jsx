import React from 'react';
import block from 'bem-cn';
import { TextField } from '@gpn-design/uikit';
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

const b = block('PipelineStageItem');
const d = block('decorator');
const ls = block('pt-list');

const PipelineItem = (props) => {
  const { className } = props;

  return (
    <div className={ b({}).mix( ls({'space-a': 'xs'}) ) }>
      <div className={ b('Header').mix( d({'space-h': 'xs'}) ) }>
        {/* <TextField width='full' size='xs' type='text' placeholder='0' /> */}
      </div>
      <div className={ b('List') }>
        {modules.map((module) => <ListItem >{module.label}</ListItem>)}
      </div>
    </div>
  )
};

export default PipelineItem;