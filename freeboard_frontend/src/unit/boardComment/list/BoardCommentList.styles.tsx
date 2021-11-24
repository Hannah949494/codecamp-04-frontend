import styled from "@emotion/styled";
import { Rate } from "antd";
import { User, Edit, Times } from "@emotion-icons/fa-solid";

export const ItemWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled(User)`
  width: 48px;
  height: 48px;
  padding: 10px;
  border-radius: 50%;
  background-color: #ddd;
  font-size: 18px;
  color: #fff;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 10px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  padding: 15px 0 0 10px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled(Edit)`
  width: 24px;
  height: 24px;
  color: #333;
  margin-right: 10px;
  cursor: pointer;
  transtition: color 0.5s;

  &:hover {
    transtion: color 0.5s;
    color: #ffd400;
  }
`;
export const DeleteIcon = styled(Times)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 65px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
