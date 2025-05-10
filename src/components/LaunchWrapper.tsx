"use client";

import { useState, useEffect } from 'react';
import ComingSoon from './ComingSoon';

interface LaunchWrapperProps {
  children: React.ReactNode;
}

export default function LaunchWrapper({ children }: LaunchWrapperProps) {
  const [isLaunched, setIsLaunched] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // ------ COUNTDOWN CONTROL CENTER ------
    
    // 1. MASTER SWITCH: Set to 'true' to enable countdown, 'false' to disable it completely
    const enableCountdown = true;
    
    // 2. AUTOMATIC DATE CHECK: Set your launch date (15 days from now by default)
    const calculateLaunchDate = () => {
      const now = new Date();
      const launchDate = new Date(now);
      launchDate.setDate(launchDate.getDate() + 15); // Change this number for different countdown duration
      return launchDate;
    };
    
    // 3. MANUAL OVERRIDE: Force specific behavior regardless of date
    //    - Set to null for date-based behavior (countdown shows before launch date)
    //    - Set to true to always show main site (bypass countdown)
    //    - Set to false to always show countdown
    const manualOverride = null;
    
    // ------- END CONTROL CENTER -------
    
    // Logic for determining whether to show the countdown
    const launchDate = calculateLaunchDate();
    const currentDate = new Date();
    
    if (!enableCountdown) {
      // Master switch is off - always show the main site
      setIsLaunched(true);
    } else if (manualOverride !== null) {
      // Manual override is active - follow its setting
      setIsLaunched(manualOverride);
    } else {
      // Date-based logic - show countdown only before launch date
      setIsLaunched(currentDate >= launchDate);
    }
    
    setIsLoading(false);
  }, []);
  
  // Show nothing during initial load to prevent flash
  if (isLoading) {
    return null;
  }
  
  // Show either the countdown or the actual site
  return (
    <>
      {isLaunched ? children : <ComingSoon />}
    </>
  );
} 