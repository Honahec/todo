import React from 'react';
import { List, Button } from '@arco-design/web-react';
import { IconEdit, IconDelete } from '@arco-design/web-react/icon';

const TodoList = ({ items, viewCompleted, onEdit, onDelete }) => {
  return (
    <List
      style={{ height: '70vh', overflowY: 'auto' }}
      dataSource={items}
      render={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <Button
              type="secondary"
              icon={<IconEdit />}
              onClick={() => onEdit(item)}
            >
              编辑
            </Button>,
            <Button
              type="primary"
              status="danger"
              icon={<IconDelete />}
              onClick={() => onDelete(item)}
            >
              删除
            </Button>
          ]}
        >
          <List.Item.Meta
            title={
              <span className={viewCompleted ? 'completed-todo' : ''}>
                {item.title}
              </span>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList; 