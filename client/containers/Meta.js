import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Block } from "jsxstyle";
import Input from "../components/Input";
import { meta } from "../actions/ElementActions";

class Meta extends Component {
  render() {
    const { meta, metaData } = this.props;
    return (
      <Block
        background="white"
        marginRight="43px"
        padding="1rem"
        marginBottom=".5rem"
        borderRadius="2px"
        boxShadow="0 3px 4px 0 rgba(0,0,0,.1)"
      >
        <Block width="100%" marginBottom=".5rem">
          <Input
            placeholder="Assunto"
            value={metaData.subject}
            onChange={e => meta({ subject: e.target.value })}
            style={{
              width: "100%",
              fontWeight: "bold",
              color: "#141823"
            }}
          />
        </Block>
        <Block width="100%" marginBottom=".5rem">
          <Input
            placeholder="Quinta-feira, 27 de Junho de 2019"
            value={metaData.date}
            onChange={e => meta({ date: e.target.value })}
            style={{
              width: "100%",
              fontWeight: "bold",
              color: "#141823"
            }}
          />
        </Block>
        <Block>
          <Input
            rows={2}
            onChange={e => meta({ header: e.target.value })}
            placeholder="CD Weekly | Edição #21"
            value={metaData.header}
            style={{
              width: "100%",
              color: "#595f6c",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          />
        </Block>
        <Block marginBottom=".5rem">
          <Input
            rows={2}
            onChange={e => meta({ preheader: e.target.value })}
            placeholder="Descrição"
            value={metaData.preheader}
            style={{
              width: "100%",
              color: "#595f6c",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          />
        </Block>
        <Block marginBottom=".5rem">
          <Input
            rows={2}
            onChange={e => meta({ indicated: e.target.value })}
            placeholder="Colaboraram nesta edição: Lucas Fereira, Mateus, Pedro e Luiz"
            value={metaData.indicated}
            style={{
              width: "100%",
              color: "#595f6c",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          />
        </Block>
      </Block>
    );
  }
}

function mapStateToProps(state) {
  return { metaData: state.meta };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ meta }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Meta);
