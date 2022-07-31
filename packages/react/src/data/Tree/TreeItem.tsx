import React, { useCallback } from 'react';
import clsx from 'clsx';
import { isObjectAndValid } from 'shared/isObjectAndValid';
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
} & WithChildren;

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

  let btnClass = clsx(
    'inline-flex focus:ring-0 group rounded-sm',
    { 'py-0.5 my-0.5 pr-2 hover:bg-gray-100': !blockNode },
    { 'bg-gray-200': active && !blockNode },
    { 'cursor-not-allowed hover:bg-transparent text-gray-400 pointer-events-none': disabled },
    className,
  );

  let labelClass = clsx(
    { 'rounded-sm hover:bg-gray-100 py-0.5 my-0.5 px-2': blockNode },
    { 'bg-gray-200': active && blockNode },
    { 'cursor-not-allowed hover:bg-transparent text-gray-400 pointer-events-none': disabled && blockNode },
    labelClasses,
  );

  return (
    <>
      <ClickableElement style={{ paddingLeft: blockNode ? level * 9 : level * 12 }} className={btnClass} onClick={handleClick}>
        {IconComp}
        <div className={labelClass}>{label}</div>
      </ClickableElement>
      {children && (
        <Collapse inProp={isItemExpanded(nodeId)} className="flex flex-col">
          {React.Children.map(children, child =>
            React.isValidElement(child) && React.cloneElement<any>(child, { level: level + 1 }),
          )}
        </Collapse>
      )}
    </>
  );
};
