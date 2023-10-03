import { createContext, useState, useContext, useEffect, useCallback } from "react";
import { SceneType } from "../types";
import { getScenes } from '../seed'

type AppContextState = {
  scenes: Record<number, SceneType> | null
  currentScene: SceneType | null
  changeScene: (sceneId: number) => void
};

export const AppContext = createContext<AppContextState>({
  scenes: null,
  currentScene: null,
  changeScene: () => {
    throw new Error("Function not implemented!");
  }
});

export const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  // State
  const [scenes, setScenes] = useState<Record<number, SceneType> | null>(null);
  const [currentScene, setCurrentScene] = useState<SceneType | null>(null);

  // Handlers
  const prepareScenes = useCallback(() => {
    const scenes = getScenes();
    setScenes(scenes);

    if (scenes) {
      setCurrentScene(scenes[1]);
    }
  }, []);

  const changeScene = (newSceneId: number) => {
    if (scenes)
      setCurrentScene(scenes[newSceneId])
  }

  useEffect(() => {
    prepareScenes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <AppContext.Provider value={{ scenes, currentScene, changeScene }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
