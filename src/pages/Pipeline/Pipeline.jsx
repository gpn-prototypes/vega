import React from 'react';
import block from 'bem-cn';
import PipelineStage from '../../components/PipelineStage/PipelineStage';
import { CreatePipelineModules, PreviewPipelineModules } from '../../mocks.js'

import './styles.css';

const b = block('Pipeline');
const d = block('decorator');

const Pipeline = (props) => {
  const { className } = props;

  return (
    <div className={ b() }>
      <div className={ b('Aside') }></div>
      <div className={ b('Main') }>
        <div className={ b('Scenario').mix( d({'space-b': 'l', 'indent-b': '2xl', 'border': 'b'}) ) }>
          {CreatePipelineModules.map((stage) => <PipelineStage view='create' modules={stage} />)}
        </div>
        {/* <div className={ b('Scenario').mix( d({'space-b': 'l', 'indent-b': '2xl', 'border': 'b'}) ) }>
          {PreviewPipelineModules.map((stage) => (
            <PipelineStage 
              view='preview' 
              modules={stage.modules} 
              progress={stage.progress} 
              complete={stage.success} 
            />
          ))}
        </div> */}
        
      </div>
    </div>
  )
};

export default Pipeline;