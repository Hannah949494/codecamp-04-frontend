import { ChangeEvent } from "react";

export interface CheckTypeProps {
  isEdit: boolean;
  data?: any;
}
export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IVariables {
  title?: string;
  writer?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface WriteContainer {
  putWriterdata: (event: ChangeEvent<HTMLInputElement>) => void;
  putPassworddata: (event: ChangeEvent<HTMLInputElement>) => void;
  putTitledata: (event: ChangeEvent<HTMLInputElement>) => void;
  putYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  putWContentsdata: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  checkNullinput: () => void;
  checknullwriter: String;
  checknulltitle: String;
  checknullpassword: String;
  checknullcontents: String;
  updateBoardContent: () => void;
  isEdit: boolean;
  data: any;
  isActive: boolean;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
}
export interface ISubmitButtonProps {
  isActive: boolean;
}
