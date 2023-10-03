export type SceneType = {
  id: number
  backgroundImage: string;
  x?: number;
  y?: number;
  transform?: string;
  hitzones: Pick<SceneType, 'id'| 'x' | 'y'>[];
};