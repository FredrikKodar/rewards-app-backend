import React from 'react';
import { PrimaryButton } from '../ui/Button';

interface TaskToggleButtonProps {
  isCompleted: boolean;
  onToggle: () => void;
  isLoading?: boolean;
}

export const TaskToggleButton: React.FC<TaskToggleButtonProps> = ({ 
  isCompleted, 
  onToggle, 
  isLoading = false 
}) => (
  <PrimaryButton 
    onClick={onToggle} 
    disabled={isLoading}
    className={isCompleted ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-emerald-600 hover:bg-emerald-700'}
  >
    {isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
  </PrimaryButton>
);