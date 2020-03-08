import styled from 'styled-components';
import { Button, TextField, Paper, Card } from '@material-ui/core';

export const CardMain = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  min-height: 500px;
  width: 90%;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ItemName = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap');
  font-size: 20px;
  margin-right: 5px;
  font: ;
`;

export const SendButton = styled(Button)`
  && {
    background-color: #097f07;
    padding: 7px 14px;
    margin-left: 5px;
  }
`;

export const DeleteButton = styled(Button)`
  && {
    background-color: #e60000;
    padding: 7px 14px;
    margin-left: 5px;
  }
`;

export const UpdateButton = styled(Button)`
  && {
    background-color: #000;
    padding: 7px 14px;
    margin-left: 5px;
    color: #fff;
  }
`;

export const PaperItem = styled(Paper)`
  && {
    //   background-color: #fff;
    // margin-left: 5px;
    border-radius: 20px;
    min-height: 100px;
    width: 50%;
    //   margin: 50px auto;
  }
`;

export const MyInput = TextField;

export const cards = Card;
