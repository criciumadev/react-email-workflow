import React, { Component } from "react";
import { Block, Row } from "jsxstyle";
import Button from "../components/Button";
import Input from "../components/Input";

class Url extends Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const ENTER = 13;
    if (e.keyCode === ENTER) {
      e.preventDefault();
      this.props.extract(this.props.id, this.props.url);
    }
  }

  render() {
    const { id, title, content, author, image, url, edit, extract } = this.props;
    return (
      <Block>
        <Row>
          <Input
            style={{
              flex: 1,
              marginRight: ".25rem"
            }}
            onChange={e => edit(id, { url: e.target.value })}
            onKeyDown={this.handleKeyDown}
            placeholder="Paste your link here and press Enter..."
            value={url}
            autoFocus
          />
          <Button onClick={() => extract(id, url)} primary>
            Fetch
          </Button>
        </Row>
        {title ? (
          <Block>
            <Row margin=".5rem 0">
              <Input
                style={{
                  placeholder: "Título",
                  flex: 1,
                  fontWeight: "bold",
                  color: "#141823",
                  lineHeight: "1.4",
                  fontSize: "20px"
                }}
                rows={1}
                onChange={e => edit(id, { title: e.target.value })}
                value={title}
              />
            </Row>
            <Row marginBottom=".5rem">
              <Input
                placeholder={"Conteúdo"}
                style={{
                  flex: 1,
                  color: "#595f6c",
                  fontSize: "16px",
                  lineHeight: "24px"
                }}
                rows={2}
                onChange={e => edit(id, { content: e.target.value })}
                value={content}
              />
            </Row>
            <Row marginBottom=".25rem">
              <Input
                placeholder={"Categoria"}
                style={{
                  flex: 1,
                  color: "#595f6c",
                  fontSize: "16px",
                  lineHeight: "24px"
                }}
                onChange={e => edit(id, { author: e.target.value })}
                value={author}
              />
            </Row>
            <Row marginBottom=".25rem">
              <Input
                placeholder={"Imagem menor"}
                style={{
                  flex: 1,
                  color: "#595f6c",
                  fontSize: "16px",
                  lineHeight: "24px"
                }}
                onChange={e => edit(id, { image: e.target.value })}
                value={image}
              />
            </Row>
          </Block>
        ) : null}
      </Block>
    );
  }
}

export default Url;
