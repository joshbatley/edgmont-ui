import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'base/Icons/Outline';

export const Scrollable: React.FC = ({ children }) => {
  let [{ left, right }, setArrows] = useState({ left: false, right: false });
  let [scrollable, setScrollable] = useState<boolean | undefined>(undefined);
  let ref = useRef<HTMLDivElement>(null);

  function handleScroll() {
    let rightShadow = ref.current?.scrollWidth !== (ref.current?.scrollLeft || 0) + (ref.current?.clientWidth || 0);
    let leftShadow = (ref.current?.scrollLeft || 0) > 0;
    setArrows({
      left: leftShadow,
      right: rightShadow,
    });
  }

  function checkIfScrollable() {
    setScrollable((ref.current?.scrollWidth || 0) <= (ref.current?.clientWidth || 0));
  }

  useEffect(() => {
    checkIfScrollable();
    handleScroll();
  }, []);

  if (!scrollable === false) {
    return <>{children}</>;
  }

  return (
    <div className='relative px-5'>
      {left && (
        <div className="h-full w-5 absolute left-0 top-0 z-50 rounded-t flex items-center" >
          <ChevronLeftIcon width={16} height={16} className="text-gray-500" />
        </div>
      )}
      <div
        ref={ref}
        className="max-w-full whitespace-nowrap overflow-x-auto snap-x"
        onScroll={handleScroll}
      >
        {children}
      </div>
      {right && (
        <div className="h-full w-5 right-0 absolute top-0 z-50 rounded-t flex items-center justify-end" >
          <ChevronRightIcon width={16} height={16} className="text-gray-500" />
        </div>
      )}
    </div>
  );
};
