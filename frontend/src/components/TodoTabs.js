import React from 'react';
import { Button } from '@arco-design/web-react';

const TodoTabs = ({ viewCompleted, onTabChange }) => {
  return (
    <div className="tab-list">
      <Button.Group>
        <Button
          type={viewCompleted ? 'primary' : 'secondary'}
          onClick={() => onTabChange(true)}
        >
          已完成
        </Button>
        <Button
          type={!viewCompleted ? 'primary' : 'secondary'}
          onClick={() => onTabChange(false)}
        >
          未完成
        </Button>
      </Button.Group>
    </div>
  );
};

export default TodoTabs; 