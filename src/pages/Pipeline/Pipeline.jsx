import React from 'react';
import block from 'bem-cn';
import { Text } from '@gpn-design/uikit';
import PipelineStageItem from '../../components/PipelineStageItem/PipelineStageItem';

import './styles.css';

const b = block('Pipeline');

const Pipeline = (props) => {
  const { className } = props;

  return (
    <div className={ b() }>
      <div className={ b('Aside') }></div>
      <div className={ b('Main') }>
        <PipelineStageItem />
      </div>
    </div>
  )
};

export default Pipeline;