import React, { useRef, useEffect, useState } from 'react';
import { ClickableElement } from 'inputs/Button/ClickableElement';
import { Scrollable } from 'utils';
import { Box } from 'data/Box';
import styled from 'styled-components';

const TabNavItem = styled(ClickableElement)`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  position: relative;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;
  :focus {
    box-shadow: none;
    outline: 0;
  }
`;

export type TabNavItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
};

const StyledBox = styled(Box)`
  ${({ theme }) => theme.transition}
`;

export const TabNavItems: React.FC<TabNavItemsProps> = ({ tabs, selected, onChange }) => {
  let ref = useRef<HTMLButtonElement>(null);
  let [styles, setStyles] = useState({ width: 0, left: 0 });

  useEffect(() => {
    setStyles({
      width: ref.current?.offsetWidth || 0,
      left: (ref.current?.offsetLeft || 0) - 16,
    });
  }, [selected]);

  return (
    <Scrollable>
      <Box borderBottom="lightGray.1">
        {tabs.map(({ tab, key }) => (
          <TabNavItem
            key={key}
            ref={selected === key ? ref : null}
            onClick={() => onChange(key)}
          >{tab}</TabNavItem>
        ))}
        <StyledBox height="1" position="relative" bg="primary" style={{ ...styles }} />
      </Box>
    </Scrollable>
  );
};

