import React from 'react';
import classNames from 'classnames';

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
      {React.cloneElement(addon as React.ReactElement, { className: classNames(addonClasses), disabled })}
    </div>
  ) : null;
