import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 300px;
  width: 100%;

  font-family: 'Parisienne', cursive;
  color: #df219d;
  font-size: 90px;
`
export const App = styled.div`
  width: (100%*11/12);
  height: 100%;
`
export const Input = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;

  input {
    outline: none;
    border: none;
    width: 100%;
    border-radius: 10px;
  }
`
export const Ul = styled.ul`
  display: flex;
  margin-right: 10px;
  padding: 0;
  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; */

  li{
    list-style: none;
    overflow: hidden;
    scroll-snap-align: start;
  }
`
/*
      img {
        outline: none
      } */
