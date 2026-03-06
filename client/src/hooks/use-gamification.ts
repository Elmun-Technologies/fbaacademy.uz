import { useState, useEffect, useCallback } from "react";
import {
  type GamificationState,
  type AwardResult,
  type EventType,
  type Badge,
  loadState,
  saveState,
  processEvent,
} from "@/lib/gamification";

export interface UseGamificationReturn {
  state: GamificationState;
  awardEvent: (event: EventType, payload?: string) => AwardResult | null;
  resetState: () => void;
  lastUnlockedBadges: Badge[];
  clearLastUnlocked: () => void;
}

export function useGamification(): UseGamificationReturn {
  const [state, setState] = useState<GamificationState>(loadState);
  const [lastUnlockedBadges, setLastUnlockedBadges] = useState<Badge[]>([]);

  useEffect(() => {
    const onUpdate = () => setState(loadState());
    window.addEventListener("gamification_update", onUpdate);
    return () => window.removeEventListener("gamification_update", onUpdate);
  }, []);

  const awardEvent = useCallback(
    (event: EventType, payload?: string): AwardResult | null => {
      const current = loadState();
      const result = processEvent(current, event, payload);

      if (result.pointsGained === 0 && result.newBadges.length === 0) {
        return null;
      }

      saveState(result.newState);
      setState(result.newState);

      if (result.newBadges.length > 0) {
        setLastUnlockedBadges((prev) => [...prev, ...result.newBadges]);
      }

      return result;
    },
    []
  );

  const clearLastUnlocked = useCallback(() => {
    setLastUnlockedBadges([]);
  }, []);

  const resetState = useCallback(() => {
    const fresh: GamificationState = {
      totalPoints: 0,
      earnedBadges: [],
      visitedCourses: [],
      videoWatched: false,
      formSubmitted: false,
      quizCompleted: false,
      events: [],
    };
    saveState(fresh);
    setState(fresh);
  }, []);

  return { state, awardEvent, resetState, lastUnlockedBadges, clearLastUnlocked };
}
