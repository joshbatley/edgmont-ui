import React from 'react';
import classNames from 'classnames';

const IconClasses = 'flex items-center';

export type OptionalIconProps = {
  icon: React.ReactNode;
  sizingClasses: string;
};

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, sizingClasses }) =>
  icon ? (<div className={classNames(sizingClasses, IconClasses)}>{icon}</div>) : null;
