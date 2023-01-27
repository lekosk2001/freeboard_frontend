import React from 'react';

interface Props {
  children: JSX.Element;
}

const Layout = (props: Props) => {
  return (
    <>
      <div>헤더</div>
      {props.children}
      <div>푸터</div>
    </>
  );
};

export default Layout;
