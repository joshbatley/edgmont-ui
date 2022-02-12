import React from 'react';
import classNames from 'classnames';
import { TwoColumns } from 'layout/TwoColumns';

export type ThreeColumnsProps = {
  sideNav?: React.ReactNode;
  mainNav?: React.ReactNode;
  innerClasses?: string;
} & React.ComponentPropsWithRef<'div'>;

export const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  children, sideNav, mainNav, className, innerClasses, ...rest
}) => (
  <TwoColumns sideNav={sideNav} className={className} {...rest}>
    <div className={classNames('h-full md:grid md:grid-cols-[19.5rem_auto] md:grid-flow-row min-w-0', innerClasses)}>
      {mainNav}
      {children}
    </div>
  </TwoColumns>
);
