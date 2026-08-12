import { useCallback, useEffect, useState } from "react";
import * as meApi from "../../api/me";

export function useMyParticipant() {
  const [participant, setParticipant] = useState<meApi.OwnParticipant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const { participants } = await meApi.listMyParticipants();
      setParticipant(participants[0] ?? null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { participant, isLoading, refresh };
}
