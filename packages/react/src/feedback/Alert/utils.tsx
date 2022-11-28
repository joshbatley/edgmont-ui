import React from 'react';
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';

export const getIcon = (severity: Severity) => {
  let props = {
    height: 22,
    width: 22,
  };
  switch (severity) {
    case 'error':
      return <ExclamationCircleIcon {...props} />;
    case 'warning':
      return <ExclamationTriangleIcon {...props} />;
    case 'info':
      return <InformationCircleIcon {...props} />;
    case 'success':
      return <CheckCircleIcon {...props} />;
  }
};

