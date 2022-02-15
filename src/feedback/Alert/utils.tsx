import React from 'react';
import {
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from 'feedback/Icons/Solid';

export const getIcon = (severity: Severity) => {
  let props = {
    height: 22,
    width: 22,
  };
  switch (severity) {
    case 'error':
      return <ExclamationCircleIcon {...props} />;
    case 'warning':
      return <ExclamationIcon {...props} />;
    case 'info':
      return < InformationCircleIcon {...props} />;
    case 'success':
      return <CheckCircleIcon {...props} />;
  }
};

export const getColor = (severity: Severity): Colors => {
  switch (severity) {
    case 'error':
      return 'red';
    case 'warning':
      return 'yellow';
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
  }
};
