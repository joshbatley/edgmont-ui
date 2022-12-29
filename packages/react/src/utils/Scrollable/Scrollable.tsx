import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box } from '../../data';
import styled from 'styled-components';

const ScrollBox = styled(Box)`
  white-space: nowrap;
  scroll-snap-type: x;
`;

export const Scrollable: React.FC<WithChildren> = ({ children }) => {
  let [{ left, right }, setArrows] = useState({ left: false, right: false });
  let [scrollable, setScrollable] = useState<boolean | undefined>(undefined);
  let ref = useRef<HTMLDivElement>(null);

  let handleScroll = () => {
    let rightShadow = ref.current?.scrollWidth !== (ref.current?.scrollLeft || 0) + (ref.current?.clientWidth || 0);
    let leftShadow = (ref.current?.scrollLeft || 0) > 0;
    setArrows({
      left: leftShadow,
      right: rightShadow,
    });
  };

  let checkIfScrollable = () => {
    setScrollable((ref.current?.scrollWidth || 0) <= (ref.current?.clientWidth || 0));
  };

  useEffect(() => {
    checkIfScrollable();
    handleScroll();
  }, []);

  if (!scrollable === false) {
    return <>{children}</>;
  }

  return (
    <Box position="relative" px="5">
      {left && (
        <Box height="100%" width="5" position="absolute" left="0" top="0" zIndex="50" display="flex" alignItems="center" color="baseHighlight">
          <ChevronLeftIcon width={16} height={16} />
        </Box>
      )}
      <ScrollBox
        maxHeight="100%"
        ref={ref}
        overflowX="auto"
        onScroll={handleScroll}
      >
        {children}
      </ScrollBox>
      {right && (
        <Box height="100%" width="5" position="absolute" right="0" top="0" zIndex="50" display="flex" alignItems="center" justifyContent="end" color="baseHighlight">
          <ChevronRightIcon width={16} height={16} />
        </Box>
      )}
    </Box>
  );
};
