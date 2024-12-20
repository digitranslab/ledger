// @ts-nocheck
import React from 'react';
import { Choose } from '@/components';
import LedgerLoading from './LedgerLoading';

/**
 * Dashboard loading indicator.
 */
export default function DashboardLoadingIndicator({
  isLoading = false,
  className,
  children,
}) {
  return (
    <Choose>
      <Choose.When condition={isLoading}>
        <LedgerLoading />        
      </Choose.When>

      <Choose.Otherwise>
        { children }
      </Choose.Otherwise>
    </Choose>
  );
}
