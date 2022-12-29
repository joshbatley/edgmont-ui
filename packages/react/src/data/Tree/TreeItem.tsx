import React, { useCallback } from 'react';
import styled from 'styled-components';
import { isObjectAndValid } from '../../shared/isObjectAndValid';
import { Collapse } from '../../utils/Transitions/Collapse';
import { useTreeContext } from './TreeContext';
import { ClickableElement } from '../../inputs/Button/ClickableElement';
import { Box } from '../Box';

type Icon = React.ReactNode | {
  endIcon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
};

export type TreeItemProps = {
  nodeId: string;
  label: string;
  icon?: Icon;
  active?: boolean;
  level?: number;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent, toggleItem?: () => void) => void;
} & WithChildren;

type LabelProps = {
  active?: boolean;
  disabled?: boolean;
  blockNode?: boolean;
};

const Label = styled.div<LabelProps>`
  ${({ theme, blockNode, active, disabled }) => blockNode && `
    border-radius: ${theme.radii[2]};
    padding: calc(${theme.space[1]} / 2) ${theme.space[2]};
    margin: calc(${theme.space[1]} / 2) 0;
    background: ${active ? theme.colors.background[2] : 'transparent'};
    :hover {
      background: ${disabled ? 'transparent' : theme.colors.background[2]};
    }
    ${disabled && `
      cursor: not-allowed;
      pointer-events: none;
      color: ${theme.colors.background[3]};
    `}
  `}
`;

type ButtonProps = {
  active?: boolean;
  disabled?: boolean;
  blockNode?: boolean;
  level: number;
};

const StyledBtn = styled(ClickableElement) <ButtonProps>`
  display: inline-flex;
  border-radius: ${({ theme }) => theme.radii[1]};
  padding-left: ${({ level, blockNode }) => blockNode ? level * 9 : level * 12}px;
  :focus {
    box-shadow: none !important;
  }
  ${({ blockNode, active, theme, disabled }) => !blockNode && `
    border-radius: ${theme.radii[2]};
    padding-top: calc(${theme.space[1]} / 2);
    padding-bottom: calc(${theme.space[1]} / 2);
    padding-right: ${theme.space[2]};
    margin: calc(${theme.space[1]} / 2) 0;
    background: ${active ? theme.colors.background[2] : 'transparent'};
    :hover {
      background: ${disabled ? 'transparent' : theme.colors.background[2]};
    }
    ${disabled && `
      cursor: not-allowed;
      pointer-events: none;
      color: ${theme.colors.background[3]};
    `}
  `}
`;

export const TreeItem: React.FC<TreeItemProps> = ({
  nodeId, label, children, icon, level = 1, onClick, active, disabled,
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

  return (
    <>
      <StyledBtn blockNode={blockNode} active={active} disabled={disabled} level={level} onClick={handleClick}>
        {IconComp}
        <Label blockNode={blockNode} active={active} disabled={disabled}>{label}</Label>
      </StyledBtn>
      {children && (
        <Collapse inProp={isItemExpanded(nodeId)}>
          {React.Children.map(children, child => (
            <Box display="flex" flexDirection="column">
              {React.isValidElement(child) && React.cloneElement<any>(child, { level: level + 1 })}
            </Box>
          ))}
        </Collapse>
      )}
    </>
  );
};
