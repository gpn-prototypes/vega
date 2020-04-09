import React from 'react';
import block from 'bem-cn';
import { Text, Button, IconAdd } from '@gpn-design/uikit';
import PipelineStageCard from '../PipelineStageCard/PipelineStageCard';

import './styles.css';

const b = block('PipelineStage');

const PipelineStage = (props) => {
  const { className } = props;

  return (
    <div className={ b() }>
      <PipelineStageCard />

      <div className={ b('Line') }>
        <div className={ b('AddNewBranch') }>
          <Button 
            size='xs' 
            view='primary' 
            onlyIcon={true} 
            iconLeft={IconAdd} 
            iconSize='s' 
            form='round' 
            label='Добавить новую ветку'
          />
          <div className={ b('Tooltip').mix('theme_color_gpn-default') }>
            <Text as='p' size='xs' view='primary' lineHeight='xs'>Добавить альтернативную ветку от этого этапа</Text>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PipelineStage;