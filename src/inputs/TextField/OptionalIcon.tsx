import React from 'react';
import clsx from 'clsx';

export type OptionalIconProps = {
  icon: React.ReactNode;
  sizingClasses: string;
};

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, sizingClasses }) =>
  icon ? (<div className={clsx('flex items-center', sizingClasses)}>{icon}</div>) : null;
