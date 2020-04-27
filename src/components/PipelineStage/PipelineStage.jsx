import React from 'react';
import block from 'bem-cn';
import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css';
import PipelineStageCard from '../PipelineStageCard/PipelineStageCard';

import './styles.css';

const b = block('PipelineStage');

const PipelineStage = (props) => {
  const { complete, progress, view, modules, className } = props;

  const getView = () => {
    if (complete === '100%' && progress === '100%') return 'completed';
    else if (progress === '100%') return 'inProgress';
    return false;
  };

  return (
    <div className={ b() }>
      <PipelineStageCard view={view} modules={modules} />

      <div className={ b('Line', { view: getView() }) }>
        <div  
          className={b('Progress', { view: 'inProgress' } )} 
          style={{ width: progress }} 
        />
        <div  
          className={b('Progress', { view: 'completed' } )} 
          style={{ width: complete }} 
        />
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
          <div className={ b('Tooltip').mix('Theme_color_gpnDefault') }>
            <Text as='p' size='xs' view='primary' lineHeight='xs'>Добавить альтернативную ветку от этого этапа</Text>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PipelineStage;