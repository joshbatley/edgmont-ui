import React from 'react';
import clsx from 'clsx';

export type AddonElementProps = {
  containerClasses: string;
  addonClasses: string;
  addon: React.ReactNode;
  disabled?: boolean;
};

export const AddonElement: React.FC<AddonElementProps> = ({
  containerClasses, addonClasses, addon, disabled,
}) =>
  addon ? (
    <div className={containerClasses}>
      {React.cloneElement(addon as React.ReactElement, { className: clsx(addonClasses), disabled })}
    </div>
  ) : null;
