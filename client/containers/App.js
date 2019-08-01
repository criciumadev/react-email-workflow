import React, { Component } from "react";
import { Block, Row, Col } from "jsxstyle";
import Preview from "./Preview";
import Meta from "./Meta";
import ElementList from "./ElementList";
import L from "../LayoutConstants";
import { H4 } from "../components/Type";

export default class App extends Component {
  render() {
    return (
      <Col>
        <Row
          height={L.gridUnit * 6.25}
          alignItems="center"
          justifyContent="space-between"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          padding="0 1rem"
          background={L.blue}
          zIndex="1">
          <H4 color="#ffffff">Newsletter Generator</H4>
        </Row>
        <Block maxWidth="616px" marginTop="50px" height="calc(100vh - 50px)" padding="1rem 1rem 0">
          <Meta />
          <ElementList />
        </Block>
        <Preview />
      </Col>
    );
  }
}
