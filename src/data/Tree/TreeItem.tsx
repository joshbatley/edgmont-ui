import React, { useCallback } from 'react';
import classNames from 'classnames';
import { ClickableElement } from 'inputs';
import { Collapse } from 'utils';
import { useTreeContext } from '.';

type Icon = React.ReactNode | {
  endIcon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
};

export type TreeItemProps = {
  nodeId: string;
  label: string;
  className?: string;
  labelClasses?: string;
  icon?: Icon;
  active?: boolean;
  level?: number;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent, toggleItem?: () => void) => void;
};

function isObjectAndValid<T extends ObjectKey>(icon: any, key: T): icon is WithKey<T> {
  return icon !== undefined
    && icon !== null
    && typeof icon === 'object'
    && key in icon
    && React.isValidElement(icon[key]);
}

export const TreeItem: React.FC<TreeItemProps> = ({
  nodeId, label, children, className, icon, level = 1, onClick, active, disabled, labelClasses,
}) => {
  let {
    isItemExpanded,
    toggleItem,
    defaultEndIcon,
    defaultExpandedIcon,
    defaultCollapseIcon,
    blockNode,
  } = useTreeContext();

  let endIcon = isObjectAndValid(icon, 'endIcon') ? icon.endIcon : defaultEndIcon;
  let expandedIcon = isObjectAndValid(icon, 'expandedIcon') ? icon.expandedIcon : defaultExpandedIcon;
  let collaspseIcon = isObjectAndValid(icon, 'collapseIcon') ? icon.collapseIcon : defaultCollapseIcon;

  let ActionIcon = isItemExpanded(nodeId) ? expandedIcon : collaspseIcon;
  let StateIcon = children ? ActionIcon : endIcon;
  let Icon = React.isValidElement(icon) ? icon : StateIcon;
  let IconComp = blockNode ? <ClickableElement as="a" onClick={() => toggleItem(nodeId)}>{Icon}</ClickableElement> : Icon;

  let handleClick = useCallback((e: React.MouseEvent) => {
    if (onClick !== undefined && typeof onClick === 'function') {
      onClick(e, () => toggleItem(nodeId));
      return;
    }
    if (!blockNode) {
      toggleItem(nodeId);
    }
  }, [nodeId, onClick, toggleItem, blockNode]);

  let btnClass = classNames(
    `pl-${blockNode ? (level * 3 - 1) : level * 3} inline-flex focus:ring-0 group rounded-sm`,
    blockNode ? '' : ' py-0.5 my-0.5 pr-2 hover:bg-gray-100',
    active && !blockNode && 'bg-gray-200',
    disabled && 'cursor-not-allowed hover:bg-transparent text-gray-400 pointer-events-none',
    className,
  );

  let labelClass = classNames(
    blockNode && 'rounded-sm hover:bg-gray-100 py-0.5 my-0.5 px-2',
    active && blockNode && 'bg-gray-200',
    disabled && blockNode && 'cursor-not-allowed hover:bg-transparent text-gray-400 pointer-events-none',
    labelClasses,
  );

  return (
    <>
      <ClickableElement className={btnClass} onClick={handleClick}>
        {IconComp}
        <div className={labelClass}>{label}</div>
      </ClickableElement>
      {children && (
        <Collapse inProp={isItemExpanded(nodeId)} className="flex flex-col">
          {React.Children.map(children, child =>
            React.isValidElement(child) && React.cloneElement(child, { level: level + 1 }),
          )}
        </Collapse>
      )}
    </>
  );
};
