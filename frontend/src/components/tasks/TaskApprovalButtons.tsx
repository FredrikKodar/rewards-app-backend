import React from 'react';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

interface TaskApprovalButtonsProps {
  onApprove: () => void;
  onReject: () => void;
  isLoading?: boolean;
}

export const TaskApprovalButtons: React.FC<TaskApprovalButtonsProps> = ({ 
  onApprove, 
  onReject, 
  isLoading = false 
}) => (
  <div className="flex gap-2">
    <PrimaryButton onClick={onApprove} disabled={isLoading}>
      Approve
    </PrimaryButton>
    <SecondaryButton onClick={onReject} disabled={isLoading}>
      Reject
    </SecondaryButton>
  </div>
);