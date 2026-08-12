import { useCallback, useEffect, useState } from "react";
import * as programsApi from "../../api/programs";
import type { Program } from "../../types";

export function useAdminPrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const { programs } = await programsApi.listPrograms();
      setPrograms(programs);
      setSelectedId((current) => current ?? programs[0]?.id ?? null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const selectedProgram = programs.find((p) => p.id === selectedId) ?? null;

  return { programs, selectedProgram, selectedId, setSelectedId, isLoading, refresh };
}
