import { useEffect, useState } from "react";
import { AppState } from "react-native";

export default function useAppInactiveHandler(onTimeout: () => void, timeout = process.env.INACTIVITY_TIMEOUT) { // 5 min
  const [appState, setAppState] = useState(AppState.currentState);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "background") {
        const id = setTimeout(() => {
          onTimeout(); 
        }, Number(timeout));
        setTimeoutId(id);
      } else if (nextAppState === "active") {
        if (timeoutId) clearTimeout(timeoutId);
      }

      setAppState(nextAppState);
    });

    return () => subscription.remove();
  }, [timeoutId]);

  return appState;
}