import { isValidElement } from 'react';
import { ObjectKey, WithKey } from '../types';

export function isObjectAndValid<T extends ObjectKey>(icon: any, key: T): icon is WithKey<T> {
  return icon !== undefined
    && icon !== null
    && typeof icon === 'object'
    && key in icon
    && isValidElement(icon[key]);
}
