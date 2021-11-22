
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any
  bestdata? : any
  el : any
  MoveToWritePage: () => void
  MoveToBestDetailPage: (event: MouseEvent<HTMLDivElement>) => void
  MoveToDetailPage: (event: MouseEvent<HTMLDivElement>) => void
}
