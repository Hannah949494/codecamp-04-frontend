import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  MoveToList: () => void;
  MoveToEditPage: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
